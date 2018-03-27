import React, { Component } from 'react';
import { Button} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';



class CategoryView extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
       activeItem: 'home'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let category = e.target.innerText.toLowerCase();
    this.props.history.push(`/landing/${category}`);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <Button color='violet'>Electronics</Button>
        <Button color='orange'>Automotive</Button>
        <Button color='yellow'>HandyMan</Button>
        <Button color='blue'>Computers</Button>
        <Button color='green'>General Labour</Button>
        <Button color='teal'>Specialty</Button>
        <Button color='purple'>Electrican</Button>
        <Button color='pink'>Free Stuff</Button>
      </div>
    )
  }
}

export default withRouter(CategoryView);