import React, { Component } from 'react'
import { Button} from 'semantic-ui-react'



export default class CategoryView extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
       activeItem: 'home'
    }
  }



  render() {


    return (

      <div>
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