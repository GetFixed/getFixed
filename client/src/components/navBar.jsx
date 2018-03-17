import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search.jsx';
import LoginButton from './loginButton.jsx';
import FixButton from './fixButton.jsx';

class NavBar extends React.Component {


  render() {
    return (
      <div>
        <div>
          LOGO HERE
        </div>
        <div>
          <Search />
        </div>
        <div>
          <FixButton />
          <LoginButton />
        </div>
      </div>
    )
  }
}

export default NavBar;