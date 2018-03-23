const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, db){

  passport.serializeUser(function(user, done) {
          done(null, user.id);
      });

  passport.deserializeUser(function(id, done) {
      db.users.findById(id).then(function(user) {
        if(user){
          done(null, db.users.get());
        }
        else{
          done(db.users.errors, null);
        }
      });

  passport.use(new LocalStrategy (
    function(username, password, done) {
      db.users.findOne({where: {username: username}})
      .then(user => {
        if(!user) {
          return done(null, false, {message: 'Incorrect username.'});
        }
        if (!user.validPassword(password)) {
          return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user)
      })
    }
    )

});