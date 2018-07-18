import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react';

class Navigation extends React.Component {

  render() {
    return (
      <Container>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item header>
              Policy Tool
            </Menu.Item>
            <Menu.Item as='a'><Link to="/">Home</Link></Menu.Item>
            <Menu.Item as='policy_categories'><Link to="/policy_categories">Policy Categories List</Link></Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </Container>
    );
  }
};

export default Navigation;
