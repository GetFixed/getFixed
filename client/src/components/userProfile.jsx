import React from 'react';
import GoogleMap from './googleMap.jsx';

const UserProfile = (props) => {

  return (
    <div>
      <h3>NAME OF USER</h3>
      <div>
        <div>
          RATINGS
        </div>
        <div>
          PROBLEMS
        </div>
        <div>
          SERVICED PROBLEMS
        </div>
        <div>
          LOCATION
          <GoogleMap />
        </div>
      </div>
    </div>
  )
}

export default UserProfile;