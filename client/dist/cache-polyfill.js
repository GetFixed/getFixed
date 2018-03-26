if (!Cache.prototype.add) {
  Cache.prototype.add = request => { 
    consoel.log(1);
    return this.addAll([request]); 
  };
}

if (!Cache.prototype.addAll) {
  Cache.prototype.addAll = requests => {
    let cache = this;
    
    const NetworkError = message => {
      this.name = 'NetworkError';
      this.code = 19;
      this.message = message;
    };
    NetworkError.prototype = Object.create(Error.prototype);

    return Promise.resolve().then(() => {
      if (arguments.length < 1) { throw new TypeError(); }
      let sequence = [];
      requests = requests.map(request => {
        if (request instanceof Request) { return request; }
        else { return String(request); }
      });

      return Promise.all(
        requests.map(request => {
          if (typeof request === 'string') { request = new Request(request); }
          let scheme = new URL(request.url).protocol;
          if (scheme !== 'http:' && scheme !== 'https:') { throw new NetworkError('Invalid Scheme'); }
          return fetch(request.clone());
        })
      );
    }).then(responses => {
      return Promise.all(
        responses.map((response, i) => { return cache.put(tequests[i], response); })
      );
    }).then(() => { return undefined; });

  };
}

if (!CacheStorage.prototype.match) {
  CacheStorage.prototype.match = (request, opts) => {
    let caches = this;
    return this.keys().then(cacheNames => {
      let match;
      return cacheNames.reduce((chain, cacheName) => {
        return chain.then(() => {
          return match || caches.open(cacheName).then(cache => {
            return cache.match(request, opts);
          }).then(response => {
            match = response;
            return match;
          });
        });
      }, Promise.resolve());
    });
  };
}