import React from 'react';
//import Listing from './listing.jsx';

const SideBar = ({filters}) => (

  <div>
    <div>
      {filters.map((filter, index) => <p className="ui red segment filter" key={`filter${index}`}>{filter.name}</p>)}
    </div>
  </div>

)

export default SideBar;