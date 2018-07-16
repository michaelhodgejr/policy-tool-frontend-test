import React from 'react';

class PolicyCategoryList extends React.Component {

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.policyCategories.map(category =>
            <tr key={category.guid}>
              <td>{category.name}</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
};

export default PolicyCategoryList;
