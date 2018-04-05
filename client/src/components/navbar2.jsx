import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import FixButton from './fixButton.jsx';



class Navbar2 extends React.Component {
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

    render(){
      let dynamicNavbar = this.props.isLoggedIn ? (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <Link to ='/landing'>
        <h2 className="navbar-brand">GetFixed</h2>
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <Link to ='/personalProfile'>
            <li className="nav-item active">
              <h5 className="nav-link">Profile <span className="sr-only">(current)</span></h5>
            </li>
            </Link>
            <Link to='/'>
              <li onClick={this.handleClick}className="nav-item">
                <h5 className="nav-link" href="#">Logout</h5>
              </li>
            </Link>
            <li className="nav-item">
              <FixButton
                isLoggedIn={this.props.isLoggedIn}
                user={this.props.user}
                />
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input className="form-control mr-md-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary" type="submit">Search</button>
         </form>
        </div>
      </nav>
        ) : (<nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <Link to ='/landing'>
        <span className="navbar-brand"><h3>GetFixed</h3></span>
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <Link to ='/signUp'>
            <li className="nav-item active">
              <h5 className="nav-link">Sign Up <span className="sr-only">(current)</span></h5>
            </li>
            </Link>
            <Link to ='/loginPage'>
            <li className="nav-item">
              <h5 className="nav-link">Login</h5>
            </li>
            </Link>
            <li className="nav-item">
            <Link to='loginPage'>
              <FixButton
                isLoggedIn={this.props.isLoggedIn}
                user={this.props.user}
                />
            </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input className="form-control mr-md-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary" type="submit">Search</button>
          </form>
        </div>
      </nav>);

    return (
      <div>
        {dynamicNavbar}
      </div>
      )
    }
}

export default Navbar2