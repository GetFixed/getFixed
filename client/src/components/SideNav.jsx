import React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FixButton from './fixButton.jsx';
import DistanceSlideBar from './DistanceSlideBar.jsx';
import CategoryView from './categoryView.jsx';


export default class SideNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle (){
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Filter Menu"
          onClick={() => this.handleToggle()} />
        <Drawer open={this.state.open}>
        <div style={{ padding:" 224px 0px 0px 50px" }}>
        <RaisedButton
          label="Close Filter"
          onClick={() => this.handleToggle()} />
        <CategoryView history={history} />
        <DistanceSlideBar />
                    <button
              onClick={this.getUsersLocation}
              style={{ marginBottom: '1%' }}
              onClick={() => this.handleToggle()}
            >
              Filter
            </button>
        <FixButton />
        </div>
        </Drawer>
      </div>
    );
  }
}