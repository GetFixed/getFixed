import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar2 from './navBar2.jsx';
import axios from 'axios';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ChatBoxWithMessages from './chatBoxArea.jsx';
import SocialMedia from './socialMediaIcons.jsx'
import Footer from './footer.jsx'


class SingleProblemPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentProblem: {},
    }
  }

  componentWillMount() {
    axios.get(`/listing/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          currentProblem: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching data for PROBLEM', error);
      })
  }

  render() {
    return (
      <div>
        <NavBar2
          isLoggedIn={this.props.isLoggedIn}
          onLogout={this.props.onLogout}
        />
        <div className="ui hidden divider"></div>
        <div className="ui raised container">
          <div className="content">
            <div className="ui header"></div>
          </div>
          <a className="ui red ribbon label">{this.props.match.params.username}</a>
          <div className="ui segment">
            <img className="ui large image" style={{"display": "inline-block", width: '40vw', height: '40vw',}} src={this.state.currentProblem.image}/>
            <div className="ui card" style={{"display": "inline-block", "margin":15}}>
            <h2>{this.state.currentProblem.title}</h2>
              <ChatBoxWithMessages  id={this.props.match.params.id}/>
              <h5>Share this Listing</h5>
              <SocialMedia />
            </div>
          </div>
          <div className="ui card">
            <div className="content description">
              <h4 className="ui sub header">Problem Description:</h4>
              <p>{this.state.currentProblem.description}</p>
            </div>
          </div>
        </div>
        <div className="fixed-bottom" style={{ padding:" 0px 20px 20px 20px"}}>
          <Link to ='/landing'>
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
          label="Filter"
          >
          <i className="material-icons">keyboard_return</i>
          </button>
          </Link>
        </div>
        <Footer />

      </div>
    )
  }
}

export default SingleProblemPage;