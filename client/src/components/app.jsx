import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './landing.jsx'
import LoginPage from './loginPage.jsx'
import SingleProblemPage from './singleProblemPage.jsx'
import ViewConversation from './viewConversation.jsx'
import Signup from './signup.jsx'
import UserProfile from './userProfile.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Landing } />
          <Route path='/signup' component={ Signup } />
          <Route path='/landing/:category' component={ Landing } />
          <Route path='/landing'
            render={
              (props) => {
                return <Landing {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  />
                }
              }
          />
          <Route path='/loginPage' component={ LoginPage } />
          <Route path='/singleProblemPage/:id/:username' component={ SingleProblemPage } />
          <Route path='/userProfile/:id' component={ UserProfile } />
          <Route path='/viewConversation' component={ ViewConversation } />
        </Switch>
      </div>
    )
  }
}

export default App;