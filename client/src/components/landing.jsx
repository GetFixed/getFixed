import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import Navbar2 from './navBar2.jsx';
import ProblemsView from './problemsView.jsx';
import CategoryView from './categoryView.jsx';
import Footer from './footer.jsx';
import DistanceSlideBar from './DistanceSlideBar.jsx';
import FixButton from './fixButton.jsx';
import SideNav from './SideNav.jsx'

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 37.2113,
      longitude: -121.8379,
      modalOpen: false,
      distance: 200,
    };
    this.geoLocationSuccess = this.geoLocationSuccess.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.geoLocationError = this.geoLocationError.bind(this);
    this.getUsersLocation = this.getUsersLocation.bind(this);
  }

  geoLocationSuccess(pos) {
    const crd = pos.coords;
    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  geoLocationError() {
    axios.get('/ip')
      .then((response) => {
        if (response.data.latitude) {
          this.setState({
            latitude: response.data.latitude,
            longitude: response.data.longitude,
          });
        }
      });
  }

  getUsersLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: Infinity,
    };
    if (navigator.geolocation) {
      navigator
        .geolocation
        .getCurrentPosition(this.geoLocationSuccess, this.geoLocationError, options);
    }
  }

  componentDidMount() {
    this.getUsersLocation();
  }

  handleSlide(miles) {
    this.setState({ distance: miles });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar2
            isLoggedIn={this.props.isLoggedIn}
            onLogout={this.props.onLogout}
            user={this.props.user}
          />
        </div>
        <div className="ui hidden divider"></div>
        <div
          className="sixteen wide column"
          style={{ padding:" 35px 0 0px 120px" }}
        >
        <div className="ui grid container">
          <div
            className="fixed-top"
            style={{ padding:" 250px 10px 180px 15px", width:"12vw" }}
          >
            <SideNav
              history={history}
              handleSlide={this.handleSlide}
            />
          </div>
            <ProblemsView
              category={this.props.match.params.category}
              coords={{ latitude: this.state.latitude, longitude: this.state.longitude }}
              distance={this.state.distance}
            />
          </div>
        </div>
          <div className="ui hidden divider"></div>
          <Footer />
        <br />
      </div>
    );
  }
}

export default Landing;
