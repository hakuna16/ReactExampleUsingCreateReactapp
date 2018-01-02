import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="">Your Application Name</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">About</NavItem>
                      <NavDropdown eventKey={3} title="Value for Dropdown" name="Value for Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                          </NavDropdown>
                        </Nav>
                      </Navbar>
);
      </div>
    );
  }
}

export default Header;
