module.exports = (app, db) => {
  app.get('/users', (req, res) => {
    db.users.findAll()
    .then(users => {
      res.json(users);
    })
  });

  app.get('/user/:id', (req, res) => {
    let user_id = req.params.id;
    console.log('\n', user_id, '\n')
    db.users.findAll({
      where: {
        num: user_id
      }
    })
    .then(user => {
      res.status(200)
      .send(user[0]);
    })
    .catch(err => {
      res.status(400)
      .send();
    });
  })

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
