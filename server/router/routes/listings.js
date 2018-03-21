module.exports = (app, db) => {
  app.get('/listings', (req, res) => {
    db.listings.findAll()
    .then(listings => {
      res.json(listings);
    })
  });

  app.get('/listing/:id', (req, res) => {
    let listing_id = req.params.id;
    console.log(listing_id)
    db.listings.findAll({
      where: {
        id: listing_id
      }
    })
    .then(listing => {
      res.status(200)
      .send(listing[0]);
    })
    .catch(err => {
      res.status(400)
      .send();
    });
  })

  app.post('/listing', (req, res) => {
    let listing = req.body
    console.log('listing', listing);
    db.listings.create(listing)
    .then(listing => {
      res.status(201)
      .send(listing);
    })
    .catch(err => {
      console.log(err)
      res.status(400)
      .send();
    })
  })
}
