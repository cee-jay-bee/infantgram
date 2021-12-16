import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function DailyForm() {
  const dispatch = useDispatch();
 
  const[ dailyForm, setDailyForm ] = useState( { } );

    //By using event.target.id, we can know which customer property is being changed. Therefore, we only
    //need one function to handle the change on all input texts on the screen.
  const handleChange = ( event ) =>{
      setDailyForm( {...dailyForm, [ event.target.id ] : event.target.value } );
  }
  
  const errors = useSelector((store) => store.errors);
  const user = useSelector((store) => store.user);
  const child = useSelector((store)=> store.child);

  const addDailyForm = (event) => {
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
    <form className="formPanel" onSubmit={addDailyForm}>
      <h2>Daily Form </h2>
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
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Child's Last Name:
          <input
            type="text"
            name="lastName"
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="dateofbirth">
          Date of Birth:
          <input
            type="date"
            name="dateofbirth"
            required
            onChange={(event) => handleChange(event)}
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
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Add Child" />
      </div>
    </form>
  );
}

export default DailyForm;
