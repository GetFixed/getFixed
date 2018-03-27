import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      city: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick(e) {
    var context = this;
    axios.post('/signup', {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        city:this.state.city
      })
      .then(function (response) {
        console.log('signup success', response);
        context.props.history.push("/");
      })
      .catch(function (error) {
        console.log('signup failed', error);
      });
  }

  render() {
    return (
     <div className='login-form'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://hdwallpaperz.net/wp-content/uploads/2017/03/Cute-Animal-Art-Wallpaper-2.jpg' />
            {' '}Create your Account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                name='email'
                value={this.state.email}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                name='username'
                value={this.state.username}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.onChange}
              />
               <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
              />
               <Form.Input
                fluid
                iconPosition='left'
                placeholder='Name'
                type='text'
              />
               <Form.Input
                fluid
                icon='home'
                iconPosition='left'
                placeholder='Street'
                type='text'
              />
               <Form.Input
                fluid
                iconPosition='left'
                placeholder='City'
                type='text'
                name='city'
                value={this.state.city}
                onChange={this.onChange}
              />
                <Form.Input
                fluid
                iconPosition='left'
                placeholder='State'
                type='text'
              />
                <Form.Input
                fluid
                iconPosition='left'
                placeholder='Zip'
                type='number'
              />

            </Segment>
          </Form>
          <Message>
                <Button
                  color='teal'
                  fluid size='large'
                  onClick={this.handleClick}
                >Login</Button>
          </Message>
          <Message>
            <Link to ='/loginPage'>Already have an account? Sign in here. </Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}

export default Signup