import React from 'react';
import NavBar from './navBar.jsx';
import CategoryView from './categoryView.jsx';
import request from 'superagent';
// import GoogleMap from './googleMap.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
  }

  componentWillMount() {
    request
      .get(`/user/${this.props.match.params.id}`)
      .then(result => this.setState({ currentUser: result.body }));
  }


  render() {
    return (
      <div>
        <NavBar />
        <CategoryView />
        <div style={{paddingLeft: "4%", paddingTop: "2%"}}>
          <h2>{this.state.currentUser.username}</h2>
          <div>
            <div>
              Stars Image
            </div>
            <span>{this.state.currentUser.avg_rating} </span>
            <span>|          {this.state.currentUser.rating_count} Ratings</span>
          </div>
          <div>
            <h4>{this.state.currentUser.phone_number}</h4>
            <span><em>Serving area around {this.state.currentUser.city}, call for availability</em></span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;