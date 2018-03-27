import React, { Component } from 'react';
import { Input, Menu, Button} from 'semantic-ui-react';
import FixButton from './fixButton.jsx';
import CamShot from './cameraFunction.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends React.Component {
    constructor(props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);

  }


    handleClick(e) {
      axios.get('/logout')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

  render() {


    return (
    <div>
      <Menu className="fluid horizontal">
      <Link to ='/landing'>
        <Menu.Item>
          <Button basic color='red' content='Home' />
        </Menu.Item>
      </Link>
        <Menu.Item>
          <Input style={{width: "50vw",height: "35px"}} icon='search' placeholder='What are you looking for?' />
        </Menu.Item>
        <Menu.Menu>
        <Menu.Item>
          <FixButton />
        </Menu.Item>
        <Link to ='/signUp'>
          <Menu.Item>
             <Button basic color='teal' content='Sign Up' />
          </Menu.Item>
        </Link>
        <Link to ='/loginPage'>
          <Menu.Item>
             <Button basic color='teal' content='Login' />
          </Menu.Item>
        </Link>
          <Menu.Item>
             <CamShot />

             <Button onClick={this.handleClick}basic color='teal' content='Logout' />

          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default Navbar;