import React, { Component } from 'react';
import { Input, Menu, Button} from 'semantic-ui-react';
import FixButton from './fixButton.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Navbar extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
       }
    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(e) {
    var context = this
    axios.get('/logout')
      .then(function (response) {
        console.log(response);
        context.props.onLogout();
        context.props.history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
    }


  render() {
    const dynamicNavbar = this.props.isLoggedIn ? (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <Link to ='/landing'>
          <span className="mdl-navigation__link"><h3>Get Fixed!</h3> </span>
          </Link>
          <div className="mdl-layout-spacer"></div>
          <Input style={{width: "29vw",height: "35px"}} icon='search' placeholder='What are you looking for?' />

          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link to ='/personalProfile'>
            <span className="mdl-navigation__link">Profile</span>
            </Link>
            <Link to ='/'>
            <span onClick={this.handleClick} className="mdl-navigation__link">Logout</span>
            </Link>
            <span className="mdl-navigation__link"><FixButton isLoggedIn={this.props.isLoggedIn} user={this.props.user}/></span>

          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Get Fixed!</span>
        <nav className="mdl-navigation">
          <span className="mdl-navigation__link" href=""><FixButton isLoggedIn={this.props.isLoggedIn} user={this.props.user}/></span>
            <Link to ='/personalProfile'>
            <span className="mdl-navigation__link">Profile</span>
            </Link>
            <Link to ='/'>
            <span onClick={this.handleClick} className="mdl-navigation__link">Logout</span>
            </Link>
          <Link to ='/UserProfile'>
          <span className="mdl-navigation__link" >My Account</span>
          </Link>
        </nav>
      </div>

    </div>
      ) : (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <Link to ='/landing'>
          <span className="mdl-navigation__link"><h3>Get Fixed!</h3> </span>
          </Link>
          <div className="mdl-layout-spacer"></div>
          <Input style={{width: "29vw",height: "35px"}} icon='search' placeholder='What are you looking for?' />

          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link to ='/signUp'>
            <span className="mdl-navigation__link">Sign Up</span>
            </Link>
            <Link to ='/loginPage'>
            <span className="mdl-navigation__link">Login</span>
            </Link>
            <span className="mdl-navigation__link"><Link to='loginPage'><FixButton isLoggedIn={this.props.isLoggedIn}/></Link></span>

          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Get Fixed!</span>
        <nav className="mdl-navigation">
          <span className="mdl-navigation__link" href=""><FixButton isLoggedIn={this.props.isLoggedIn}/></span>
          <Link to ='/signUp'>
          <span className="mdl-navigation__link" >Sign Up</span>
          </Link>
          <Link to ='/loginPage'>
          <span className="mdl-navigation__link" >Login</span>
          </Link>
          <Link to ='/UserProfile'>
          <span className="mdl-navigation__link" >My Account</span>
          </Link>
        </nav>
      </div>

    </div>
      )

    return (
      <div>
        {dynamicNavbar}
        </div>
      )
  }
}

export default Navbar;