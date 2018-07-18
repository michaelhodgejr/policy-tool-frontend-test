import React from 'react';
import { Table } from 'semantic-ui-react'

class PolicyCategoryList extends React.Component {

  render() {
    return(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.policyCategories.map(category =>
            <Table.Row key={category.guid}>
              <Table.Cell>{category.name}</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }
};

export default PolicyCategoryList;
