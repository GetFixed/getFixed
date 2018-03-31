

module.exports = (app, db, passport) => {
  app.post(
'/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/signupSuccess',
      failureRedirect: '/signupFailed',
    }),
  );

  app.get('/signupSuccess', (req, res) => {
    res.send(req.user.id);
  });

  app.get('/signupFailed', (req, res) => {
    res.send('Username already taken');
  });

  app.get('/loginSuccess', (req, res) => {
    res.send(req.user.id);
  });

  app.get('/loginFailed', (req, res) => {
    res.send('Incorrect username or password');
  });

  app.post('/login',
    (req, res, next) => {
      console.log('body', req.body);
      console.log('user', req.user);
      console.log('passport', req.passport);
      return next();
    },
    passport.authenticate('local-login', {
      successRedirect: '/loginSuccess',
      failureRedirect: '/loginFailed',
    }),
  );

  app.get('/logout', (req, res) => {
    req.logout();
    res.send('successful logout')
  });

  app.get('/test', (req, res, next) => {
    console.log('session', req.session);
    console.log('passport', req.session.passport);
    console.log('user', req.user);
    res.send('success');
  },
  );

  // console.log(data)
  // db.users.findOne({where: {username: 'Gkolb'}})
};