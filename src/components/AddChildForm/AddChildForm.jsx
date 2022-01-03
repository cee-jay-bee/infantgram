import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';


function AddChildForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dateofbirth, setDateOfBirth] = useState('');
  const [allergies, setAllergies] = useState('');
  
  const errors = useSelector((store) => store.errors);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const addChild = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_CHILD',
      payload: {
        firstName: firstname,
        lastName: lastname,
        dateOfBirth: dateofbirth,
        allergies: allergies,
        parentID: user.id
      },
    });

    history.push('/user');
  }; // end registerUser

  return (
    <Form onSubmit={addChild} className='formPanel' style={{backgroundColor: 'lightgrey'}}>
      <center><h2 style={{color: 'black'}}>Add Child</h2></center>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      
      <Row >
        <Col id="addChild">
          <Form.Group className="mb-3" controlId="firstName">
          <Form.Text>Child's First Name</Form.Text>
          <Form.Control type="text" value={firstname}  onChange={(event) => setFirstname(event.target.value)} required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="lastName">
          <Form.Text>Child's Last Name</Form.Text>
          <Form.Control type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Row >
        <Col>
          <Form.Group className="mb-3" controlId="dateOfBirth">
          <Form.Text>Child's Date of Birth</Form.Text>
          <Form.Control type="date" value={dateofbirth}  onChange={(event) => setDateOfBirth(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="allergies">
          <Form.Text>Child's Allergies</Form.Text>
          <Form.Control as="textarea" rows={3} value={allergies} onChange={(event) => setAllergies(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <center><Button variant="primary" type="submit" style={{backgroundColor: '#946E83'}} className="btn" name="submit" > Add </Button></center>
        </Col>
      </Row>
    </Form>
  );
}

export default AddChildForm;
