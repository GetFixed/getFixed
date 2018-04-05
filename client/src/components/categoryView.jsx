import React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

class CategoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const category = e.target.innerText.toLowerCase();
    this.props.history.push(`/landing/${category}`);
  }

  render() {
    return (
      <div className="sidebar">
        <Button.Group vertical>
        <Link to ='/landing'>
        <Button color='violet'>Show All</Button>
        </Link>
        <div onClick={this.handleClick}>
          <Button color='orange'>Automotive</Button>
          <Button color='yellow'>HandyMan</Button>
          <Button color='blue'>Computers</Button>
          <Button color='green'>General Labour</Button>
          <Button color='teal'>Specialty</Button>
          <Button color='purple'>Electronics</Button>
          <Button color='grey'>Free Stuff</Button>
          <Button disabled color='orange'>Find Problems Near You!</Button>
        </div>
        </Button.Group>
      </div>
    );
  }
}

export default withRouter(CategoryView);
