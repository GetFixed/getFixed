import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar2 from './navBar2.jsx';
import axios from 'axios';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ChatBoxWithMessages from './chatBoxArea.jsx';
import SocialMedia from './socialMediaIcons.jsx'
import Footer from './footer.jsx'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Button } from 'semantic-ui-react'


class SingleProblemPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentProblem: {},
      expanded: false,
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
        <div className="container"style={{position:'center'}}>
          <Card>
            <CardHeader
              title={this.props.match.params.username}

              avatar="https://specials-images.forbesimg.com/imageserve/5a8d920d31358e4955adf197/416x416.jpg?background=000000&cropX1=755&cropX2=2357&cropY1=494&cropY2=2097"
            />
            <img
                src={this.state.currentProblem.image}
                style={{width:'60vw',height:'40vh'}}
              />
            <CardTitle title={this.state.currentProblem.description}subtitle={this.state.currentProblem.description} />
            <CardText>
              Share this Listing.
            </CardText>
            <CardActions>
            <Button circular color='red' icon='empty heart' />
            <Button circular color='pinterest' icon='pinterest' />
            <Button circular color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='instagram' icon='instagram' />
            </CardActions>
          </Card>
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
        <Footer />
      </div>
    )
  }
}

export default SingleProblemPage;