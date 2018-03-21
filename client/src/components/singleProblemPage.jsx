import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from './navBar.jsx';
import CategoryView from './categoryView.jsx';
import axios from 'axios';

class SingleProblemPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentProblem: {}
    }
  }

  componentWillMount() {
    console.log(this.props.match.params.id);
    axios.get(`http://localhost:1337/listing/${this.props.match.params.id}`)
      .then(response => {
        response.data.image = 'https://www.aquaspresso.co.za/wp-content/uploads/2015/10/what-problem-are-you-trying-to-solve.png'
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
        <NavBar />
        <CategoryView />
        <div className="ui hidden divider"></div>
        <div className="ui raised container">
          <div className="content">
            <div className="ui header">{this.state.currentProblem.title}</div>
          </div>
          <a className="ui red ribbon label">{this.state.currentProblem.user_id}</a>
          <div className="ui segment">
            <img className="ui large image" src={this.state.currentProblem.image}/>
          </div>
          <div className="content description">
            <h4 className="ui sub header">Problem Description:</h4>
            <p>{this.state.currentProblem.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProblemPage