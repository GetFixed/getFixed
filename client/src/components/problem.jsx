import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

const Problem = ({userId, problem}) => (

  <Query query={gql`
    query SingleUserQuery($userId: String!) {
      user(num: $userId) {
        username
      }
    }
    `} variables={{userId}}
  >
    {({ loading, error, data }) => {

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      let color = colors[Math.round(Math.random()*13)];

      return (

          <Card color={color} >
            <Image src={problem.image} fluid/>
            <Card.Content>
              <Card.Header>
                {problem.title}
              </Card.Header>
              <Card.Description>
                {problem.description}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Link to={`/userProfile/${userId}`}>
                <div>
                  <span className={`ui ${color} image label`}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png"/>
                      {data.user.username}
                    <div className="detail">⭐️⭐️⭐️⭐️⭐️</div>
                  </span>
                </div>
              </Link>
            </Card.Content>
          </Card>
      )
    }}
  </Query>
);

export default Problem;