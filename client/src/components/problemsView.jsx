import React from 'react';
import Problem from './problem.jsx';

class ProblemsView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="ui right internal attached">
        <div className="ui cards">
        {this.props.problems.map((problem, index) => <Problem key={problem.id} problem={problem} index={index} />)}
        </div>
      </div>
    )
  }
}

export default ProblemsView;