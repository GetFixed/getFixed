const bCrypt = require('bcrypt-nodejs');

console.log('PASSPORT MODULE REQUIRED SUCCESSFULLY')


module.exports = function(passport, user) {
  var LocalStrategy = require('passport-local').Strategy;
  var User = user;
  // console.log('INSIDE PASSPORT CONFIG', User.findAll({ where: {username: 'Gkolb'} })
  //   .then((user) => {if (user) {console.log('HERE IS USER', user[0].id)}}))
  passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser', user);
    User.findById(id)
    .then(function(user) {
        if(user){
          console.log('deserializeUser if user', user);
          done(null, user.get());
        }
        else{
          console.log('deserializeUser else user', user);
          done(user.errors, null);
        }
    })
  });
  // passport.use(new LocalStrategy (
  //   function(username, password, done) {
  //     db.users.findOne({where: {username: username}})
  //     .then(user => {
  //       if(!user) {
  //         return done(null, false, {message: 'Incorrect username.'});
  //       }
  //       if (!user.validPassword(password)) {
  //         return done(null, false, {message: 'Incorrect password.'});
  //       }
  //       return done(null, user)
  //     })
  //   }
  //   )
  passport.use('local-signup', new LocalStrategy({
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
      console.log('got into local-signup', username, password)
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };


      User.findOne({where: {username: username}})
      .then(function(user){
        if(user) {
          return done(null, false, {message : 'That username is already taken'});
        } else {
          var hashPassword = generateHash(password);
          var data = {
            username: username,
            password: hashPassword,
            email: req.body.email,
            city: req.body.city
        };
        User.create(data)
        .then(function(newUser, created) {
          if(!newUser){
            return done(null, false);
          }
          if(newUser){
            return done(null, newUser);
          }
        });
      }
    });
  })
);
  //LOCAL LOGIN
  passport.use('local-login', new LocalStrategy({
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, username, password, done) {
      var isValidPassword = function(userpass, password){
        return bCrypt.compareSync(password, userpass);
      }
      User.findOne({where: { username: username}})
      .then(function (user) {
        if (!user) {
          return done(null, false, { message: 'Username does not exist' });
        }
        if (!isValidPassword(user.password, password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        var userinfo = user.get();
        return done(null, userinfo);
      })
      .catch(function(err){
        console.log("Error:",err);
        return done(null, false, { message: 'Something went wrong with your login' });
      });
    }
    ));
}
