import React from 'react';
import {Form,FormGroup,Col,FormControl, Checkbox, Button,ControlLabel} from 'react-bootstrap'

class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    });
  }

  handleSubmit = (event) => {
    const userNmae = this.state.userName;
    const password = this.state.password;
    console.log("user name is: " + userNmae);
    console.log("Passowrd is: " + password);
    event.preventDefault();
  }

  render(){
      return (<div className="container">
        <Form onSubmit= {this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="Email" placeholder="Email" value={this.state.userName} onChange={this.handleChange} name="userName"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} name="password"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>);
  }
}

export default LoginForm;
