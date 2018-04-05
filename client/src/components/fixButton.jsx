import React from 'react';
import CreateProblemModal from './CreateProblemModal.jsx'
import {Button} from 'semantic-ui-react';

// import { graphql } from 'react-apollo'; // for wrapping component with apollo client ??
// import gql from 'graph-ql-tag'; // for constructing query

class FixButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.closeMainModal = this.closeMainModal.bind(this);
  }

  // const _createListing = async () => {
  //   // TODO
  // }

  closeMainModal() {
    this.setState({ modalOpen: false, open:false })
  }

  render() {
    return (
      <div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={() => this.setState({modalOpen: true})} >Fix My Stuff</button>
        {this.state.modalOpen && <CreateProblemModal
          closeMainModal={this.closeMainModal}
          isLoggedIn={this.props.isLoggedIn}
          user={this.props.user}
          />}
      </div>
    );
  }
}

// const POST_MUTATION; // graphQL query

export default FixButton;

// export default graphql(POST_MUTATION, {
//   name: 'postMutation'
// }) // for apollo