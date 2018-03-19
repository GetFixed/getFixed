import React from 'react';
// import { withApollo } from 'react-apollo'; // for wrapping component with apollo client ?
// import gql from 'graphql-tag'; // for constructing query

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    }
  }

  // _executeSearch = async () => {
  //   // TODO
  // }

  render() {
    return (
      <div>
        <div>
          Search
          <input type='text'
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>
            SEARCH
          </button>
        </div>
      </div>
    )
  }
}

// const LISTING_SEARCH_QUERY; // graphQL query

export default Search;

// export default withApollo(Search); // for apollo