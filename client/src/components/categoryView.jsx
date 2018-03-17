import React from 'react';
import Category form './category.jsx';

class CategoryView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories = [];
    }
  }

  render() {
    return (
      <div>
        //{this.state.categories.map((category, index) => <Category key={category.id} category={category} index={index} />)}
      </div>
    )
  }
}

export default CategoryView;