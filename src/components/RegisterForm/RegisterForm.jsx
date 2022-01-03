import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        firstName: firstname,
        lastName: lastname
      },
    });
  }; // end registerUser

  return (
    <Form onSubmit={registerUser} className='formPanel' style={{backgroundColor: 'lightgrey'}}>
      <center><h2 style={{color: 'black'}}>Parent Registration</h2></center>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      
      <Row >
        <Col id="registerParent">
          <Form.Group className="mb-3" controlId="username">
          <Form.Text>Preferred Username</Form.Text>
          <Form.Control type="text" value={username}  onChange={(event) => setUsername(event.target.value)} required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="password">
          <Form.Text>Password</Form.Text>
          <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Row >
        <Col>
          <Form.Group className="mb-3" controlId="firstname">
          <Form.Text>First Name</Form.Text>
          <Form.Control type="text" value={firstname}  onChange={(event) => setFirstname(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="lastname">
          <Form.Text>Last Name</Form.Text>
          <Form.Control type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <center><Button variant="primary" type="submit" style={{backgroundColor: '#946E83'}} className="btn" name="submit" > Register </Button></center>
        </Col>
      </Row>
    </Form>
  );
}

export default RegisterForm;
