import React from 'react';
import NavBar from './navBar.jsx';
import CategoryView from './categoryView.jsx';
import axios from 'axios'
// import GoogleMap from './googleMap.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
  }

  componentWillMount() {
    var context = this;
    axios.get(`/user/${this.props.user}`)
      .then(function (response) {
        console.log(response)
        context.setState({currentUser: response.data})
      })
  }


  render() {
    return (
      <div>
        <NavBar />
        <div style={{paddingLeft: "4%", paddingTop: "2%"}}>
          <h2>{this.state.currentUser.username}</h2>
          <div>
            <div>
              Stars Image
            </div>
            <span>{this.state.currentUser.avg_rating || 'Unrated'} </span>
            <span>{this.state.currentUser.rating_count || 'No Ratings Yet'}</span>
          </div>
          <div>
            <h4>{this.state.currentUser.phone_number || 'No phone number'}</h4>
            <span><em>Serving area around {this.state.currentUser.city}, call for availability</em></span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;