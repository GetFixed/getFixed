import React from 'react';
import Problem from './problem.jsx';
import Username from './username.jsx';
import { Card } from 'semantic-ui-react';

const ProblemsView = ({problems}) => (

  <div>
    <Card.Group className="ui cards" itemsPerRow={3}>
      {problems.map((problem, index) => <Problem key={index} problem={problem} userId={problem.user_id} index={index} />)}
    </Card.Group>
  </div>

)

export default ProblemsView;