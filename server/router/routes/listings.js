module.exports = (app, db) => {
  app.get('/listings', (req, res) => {
    db.listings.findAll()
      .then((listings) => {
        res.json(listings);
      })
      .catch(err => console.log('In server error', err));
  });

  app.get('/listing/:id', (req, res) => {
    const listing_id = req.params.id;
    console.log(listing_id);
    db.listings.findAll({
      where: {
        id: listing_id,
      },
    })
      .then((listing) => {
        res.status(200)
          .send(listing[0]);
      })
      .catch((err) => {
        res.status(400)
          .send();
      });
  });

  app.get('/listings/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    console.log(user_id);
    db.listings.findAll({
      where: {
        user_id: user_id,
      },
    })
      .then((listings) => {
        res.status(200)
          .send(listings);
      })
      .catch((err) => {
        res.status(400)
          .send();
      });
  });

  app.post('/listing', (req, res) => {
    const listing = req.body;
    console.log('listing', listing);
    db.listings.create(listing)
      .then((listing) => {
        res.status(201)
          .send(listing);
      })
      .catch((err) => {
        console.log(err);
        res.status(400)
          .send();
      });
  });
};
