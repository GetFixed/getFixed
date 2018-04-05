import React from 'react';

const DistanceSlideBar = props => (
  <div>
    <input type="range" min="20" max="100" step="20" onChange={e => props.handleSlide(e.target.value) } />
    <br/>
    <div>
      <span>
        <span style={{ paddingRight: '5%' }}>20 </span>
        <span style={{ marginRight: '10%' }}>40</span>
        <span style={{ marginRight: '10%' }}>60</span>
        <span style={{ marginRight: '5%' }}>80</span>
        <span>100</span>
        {/* <span>miles</span> */}
      </span>
    </div>
    <span style={{ textAlign: 'center' }}>(in miles)</span>
  </div>
);

export default DistanceSlideBar;
