import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navbar from './navBar.jsx';
import ProblemsView from './problemsView.jsx';
import CategoryView from './categoryView.jsx';
import Sidebar from './sidebar.jsx';



const problems = [
    {
      id: 123,
      title: 'Broken Watch',
      description: 'Needs new hands and battery',
      image: `http://i43.tinypic.com/9kbebm.jpg`,
      owner: 'Joe',
      userId: 1
    },
    {
      id: 124,
      title: 'Antique table needs new leg',
      description: `My grandmother's heirloom table has a broken leg, and we hope someone can help us fix it`,
      image: `https://images.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dw792403f3/images/2562667/2562667_1.jpg?sw=500&sh=500`,
      owner: 'Brandon',
      userId: 2
    },
    {
      id: 125,
      title: `My iPhone's screen don't work`,
      description: `Screen's broke`,
      image: `http://www.iphoneinformer.com/wp-content/uploads/2016/05/Get-Your-iPhone-Fixed-With-The-New-iCracked-Kit.jpg`,
      owner: 'Greg',
      userId: 3
    },
    {
      id: 126,
      title: `Car doesn't start`,
      description: `I replaced the alternator, but I still can't get the thing to start.`,
      image: `https://cdn.pixabay.com/photo/2017/01/17/18/35/auto-1987642_1280.png`,
      owner: 'Kevin',
      userId: 4
    }
  ]

const filters = [
  {
    id: 1,
    name: 'In My Area',
    image: "http://www.iphoneinformer.com/wp-content/uploads/2016/05/Get-Your-iPhone-Fixed-With-The-New-iCracked-Kit.jpg",
  },
  {
    id: 2,
    name: 'Remote Help',
    image: "http://www.iphoneinformer.com/wp-content/uploads/2016/05/Get-Your-iPhone-Fixed-With-The-New-iCracked-Kit.jpg",
  },
  {
    id: 3,
    name: `Monetary Compensation`,

  }
]

class Landing extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
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
          <ProblemsView problems={problems} />
        </div>
      </div>
      </div>
    )
  }
}

export default Landing;
