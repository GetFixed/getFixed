import React from 'react';
// import { graphql } from 'react-apollo'; // for wrapping component with apollo client ??
// import gql from 'graph-ql-tag'; // for constructing query

const FixButton = () => {

  // const _createListing = async () => {
  //   // TODO
  // }

  return (
    <div>
      <button onClick={() => this._createListing()}>Fix My Stuff</button>
    </div>
  )
}

// const POST_MUTATION; // graphQL query

export default FixButton;

// export default graphql(POST_MUTATION, {
//   name: 'postMutation'
// }) // for apollo