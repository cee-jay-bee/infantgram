import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Form onSubmit={login} className='formPanel' style={{backgroundColor: 'lightgrey'}}>
      <center><h2 style={{color: 'black'}}>Log In</h2></center>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      
      <Row >
        <Col id="loginForm">
          <Form.Group className="mb-3" controlId="username">
          <Form.Text>Username</Form.Text>
          <Form.Control type="text" value={username}  onChange={(event) => setUsername(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="password">
          <Form.Text>Password</Form.Text>
          <Form.Control type="text" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <center><Button variant="primary" type="submit" style={{backgroundColor: '#946E83'}} className="btn" name="submit" > Log In </Button></center>
        </Col>
      </Row>
    </Form>
    
  );
}

export default LoginForm;
