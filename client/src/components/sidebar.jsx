import React from 'react';
//import Listing from './listing.jsx';

class SideBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listings: [],
    }
  }

  render() {
    return (
      <div>
        <div>
          //{this.state.listings.map((listing, index) => <Listing key={listing.id} listing={listing} index={index} />)}
        </div>
      </div>
    )
  }
}

export default SideBar;