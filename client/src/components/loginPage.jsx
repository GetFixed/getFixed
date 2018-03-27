import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.testFunc = this.testFunc.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  testFunc(e) {
    axios.get('/test')
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClick(e) {
    var context = this;
    axios.post('/login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function (response) {
        context.props.history.push("/")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNe7IRlCRt9dCVMqA_gTY8z5AA2AufA3k1IN4nti_wIZIUrs7u' />
              {' '}Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
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
                <Button
                  color='teal'
                  fluid size='large'
                  onClick={this.handleClick}
                >Login</Button>
                <Button
                  color='teal'
                  fluid size='large'
                  onClick={this.testFunc}
                >Test</Button>
              </Segment>
            </Form>
            <Message>
              <Link to ='/signUp'>New to us? <a href='#'>Sign Up</a></Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginPage