import React, { Component } from 'react';
import FixButton from './fixButton.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios'

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
      return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to ='/landing'>
        <h2 className="navbar-brand">GetFixed</h2>
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link to ='/signUp'>
            <li className="nav-item active">
              <span className="nav-link">Sign Up <span className="sr-only">(current)</span></span>
            </li>
            </Link>
            <Link to ='/loginPage'>
            <li className="nav-item">
              <span className="nav-link">Login</span>
            </li>
            </Link>
            <li className="nav-item">
              <FixButton />
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary" type="submit">Search</button>
          </form>
        </div>
      </nav>
        );
    }
}

export default Navbar2