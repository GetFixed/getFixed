import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from './navBar.jsx';
import axios from 'axios';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


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
        <NavBar isLoggedIn={this.props.isLoggedIn}/>
        <div className="ui hidden divider"></div>
        <div className="ui raised container">
          <div className="content">
            <div className="ui header">{this.state.currentProblem.title}</div>
          </div>
          <a className="ui red ribbon label">{this.props.match.params.username}</a>
          <div className="ui segment">
            <img className="ui large image" src={this.state.currentProblem.image}/>
          </div>
          <div className="ui card">
            <div className="content description">
              <h4 className="ui sub header">Problem Description:</h4>
              <p>{this.state.currentProblem.description}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SingleProblemPage;