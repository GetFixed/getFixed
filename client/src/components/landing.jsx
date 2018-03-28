import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navbar from './navBar2.jsx';
import ProblemsView from './problemsView.jsx';
import CategoryView from './categoryView.jsx';
import Sidebar from './sidebar.jsx';
import Footer from './footer.jsx';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const filters = [
  {
    id: 1,
    name: 'In My Area',
  },
  {
    id: 2,
    name: 'Remote Help',
  },
  {
    id: 3,
    name: 'Rewards',
  }
]

const Landing = (props) => {
  const { params: { category }} = props.match;
  let query= gql`
      query getProblems($category: String) {
        allListings(category: $category) {
          id
          image
          title
          description
          user_id
        }
      }
    `;

  return (

    <Query query={query} variables={{category}}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          <div>
          <div>
            <Navbar />
          </div>
              <CategoryView history={history}/>
                <div className="ui hidden divider"></div>
                    <div className="ui grid container">
                      <div className="ui left aligned three wide column">
                      <Sidebar filters={filters}/>
                      </div>
                      <div className="thirteen wide column">
                      <ProblemsView problems={data.allListings} />
                      </div>
                    </div>
                  <div className="ui hidden divider"></div>
                    <Footer />
                    <br />
                  </div>

        )
      }}
    </Query>
  )

}
export default Landing;

// import React from 'react';
// import { Input, Menu } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import Navbar from './navBar.jsx';
// import ProblemsView from './problemsView.jsx';
// import CategoryView from './categoryView.jsx';
// import Sidebar from './sidebar.jsx';
// import axios from 'axios';


// const filters = [
//   {
//     id: 1,
//     name: 'In My Area',
//   },
//   {
//     id: 2,
//     name: 'Remote Help',
//   },
//   {
//     id: 3,
//     name: 'Rewards',
//   }
// ]

// class Landing extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       problems: []
//     };
//   }

//   componentDidMount() {
//     axios.get('/listings')
//       .then(response => {
//         this.setState({
//           problems: response.data,
//         });
//       })
//       .catch(error => {
//         console.log('Error fetching data for LISTINGS', error);
//       });
//   }

//   getListings(query) {

//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <Navbar />
//           <CategoryView />
//         </div>
//         <div className="ui hidden divider"></div>
//         <div>
//           <div className="ui grid container">
//             <div className="ui left aligned three wide column">
//               <Sidebar filters={filters}/>
//             </div>
//             <div className="thirteen wide column">
//               <ProblemsView problems={this.state.problems} />
//             </div>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }

// export default Landing;