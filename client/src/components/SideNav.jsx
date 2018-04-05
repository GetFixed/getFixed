import React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FixButton from './fixButton.jsx';
import DistanceSlideBar from './DistanceSlideBar.jsx';
import CategoryView from './categoryView.jsx';


export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          label="Filter"
          onClick={() => this.handleToggle()}>
          <i className="material-icons">add</i>
          </button>
        <Drawer width={140} open={this.state.open}>
          <div style={{ padding: '150px 0px 0px 15px', align: 'left' }}>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
          label="Filter"
          onClick={() => this.handleToggle()}>
          <i className="material-icons">keyboard_return</i>
          </button>
          </div>
          <div style={{ padding: '15px 0px 0px 1px', align: 'left' }}>
            <CategoryView history={history} />
            <DistanceSlideBar handleSlide={this.props.handleSlide} />
            <FixButton />
          </div>
        </Drawer>
      </div>
    );
  }
}