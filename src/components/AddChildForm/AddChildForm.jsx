import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


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
    <form className="formPanel" onSubmit={addChild}>
      <h2>Add Child</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <center>
          <img src="/images/logo.gif" />
        </center>
      </div>
      <div>
        <label htmlFor="firstName">
          Child's First Name:
          <input
            type="text"
            name="firstName"
            value={firstname}
            required
            onChange={(event) => setFirstname(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Child's Last Name:
          <input
            type="text"
            name="lastName"
            value={lastname}
            required
            onChange={(event) => setLastname(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="dateofbirth">
          Date of Birth:
          <input
            type="date"
            name="dateofbirth"
            value={dateofbirth}
            required
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="allergies">
          Allergies:
          <textarea
            type="text"
            rows="4"
            cols="50"
            name="allergies"
            value={allergies}
            required
            onChange={(event) => setAllergies(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Add Child" />
      </div>
    </form>
  );
}

export default AddChildForm;
