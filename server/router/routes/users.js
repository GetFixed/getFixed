module.exports = (app, db) => {
  app.get('/users', (req, res) => {
    db.users.findAll()
    .then(users => {
      res.json(users);
    })
  });

  app.post('/user', (req, res) => {
    let user = req.body
    console.log('user', user);
    db.users.create(user)
    .then(user => {
      res.status(201)
      .send(user);
    })
    .catch(err => {
      console.log(err)
      res.status(400)
      .send();
    })
  })
}
