import React from 'react';
import { Link } from 'react-router-dom';

const Problem = (props) => {

  var colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
  var index = Math.round(Math.random()*13);
  var color = colors[index];

  props.problem.image = props.problem.image || 'https://www.aquaspresso.co.za/wp-content/uploads/2015/10/what-problem-are-you-trying-to-solve.png';

  return (
    <div className={`ui very raised ${color} card`}>
      <Link to={`/singleProblemPage/${props.problem.id}`}>
        <img className="ui centered medium image" src={props.problem.image} />
      </Link>
      <div className="content">
        <Link to={`/singleProblemPage/${props.problem.id}`}className="header problemTitle">{props.problem.title}</Link>
        <p className="problemDesc">{props.problem.description}</p>
      </div>

      <div>
        <Link to={`/userProfile/${props.problem.id}`}>
          <div>
            <span className={`ui ${color} image label`}>
              <img src="https://www.w3schools.com/howto/img_avatar.png"/>
              {props.problem.user_id}
              <div className="detail">⭐️⭐️⭐️⭐️⭐️</div>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Problem;