import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navbar from './navBar.jsx';
import ProblemsView from './problemsView.jsx';
import CategoryView from './categoryView.jsx';
import Sidebar from './sidebar.jsx';
import axios from 'axios';

const filters = [
  {
    id: 1,
    name: 'In My Area',
  },
  {
    id: 2,
    name: 'Remote Help',
  },
  {
    id: 3,
    name: 'Rewards',
  }
]

class Landing extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      problems: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:1337/listings')
      .then(response => {
        this.setState({
          problems: response.data,
        });
      })
      .catch(error => {
        console.log('Error fetching data for LISTINGS', error);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <CategoryView />
        <div className="ui hidden divider"></div>
        <div className="ui grid container">
          <div className="ui left aligned three wide column">
            <Sidebar filters={filters}/>
          </div>
          <div className="thirteen wide column">
            <ProblemsView problems={this.state.problems} />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
