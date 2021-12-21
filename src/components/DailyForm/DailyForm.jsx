import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function DailyForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const errors = useSelector((store) => store.errors);
  const user = useSelector((store) => store.user);
  const child = useSelector((store)=> store.child);
 
  const[ newDailyForm, setNewDailyForm ] = useState( { childID: props.child} );
  let needsArr = [];
  let feelsArr = [];
  

    //By using event.target.id, we can know which form property is being changed. Therefore, we only
    //need one function to handle the change on all input texts on the screen.
  const handleChange = ( event ) =>{
      setNewDailyForm( {...newDailyForm, [ event.target.id ] : event.target.value  } );
      
  }

  const handleNeedsChange = (event) => {
    needsArr.push(event.target.id);
    console.log(needsArr);
  }

  const handleFeelsChange = (event) => {
    feelsArr.push(event.target.id);
    console.log(feelsArr);
  }

  const addDailyForm = (event) => {
    event.preventDefault();

    console.log(newDailyForm);
    console.log(needsArr);
    console.log(feelsArr);

    dispatch({
      type: 'ADD_FORM',
      payload: {
        dailyForm: newDailyForm,
        babyNeeds: needsArr,
        babyFeels: feelsArr
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
        <label htmlFor="wakeUp">
          Wakeup Time:
          <input
            type="time"
            name="wakeUp"
            id="wakeup"
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="breakfastTime">
          Breakfast Time:
          <input
            type="time"
            name="breakfastTime"
            id="breakfastTime"
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="breakfastFood">
          Breakfast Food:
          <input
            type="text"
            name="breakfastFood"
            id="breakfastFood"
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="diaperChangeTime">
          Diaper Change Time:
          <input
            type="time"
            name="diaperChange"
            id="diaperChange"
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="pickupTime">
          Pickup Time:
          <input
            type="time"
            name="pickupTime"
            id="pickupTime"
            required
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="parentComments">
          Special Instructions:
          <input
            type="text"
            name="parentComments"
            id="parentComments"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="feedingInfoTime">
          Feeding Info Time:
          <input
            type="time"
            name="feedingInfoTime"
            id="feedingInfoTime"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="feedingInfoFood">
          What, Amount, Comments:
          <input
            type="text"
            name="feedingInfoFood"
            id="feedingInfoFood"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="bottleTime">
          Bottle Time:
          <input
            type="time"
            name="bottleTime"
            id="bottleTime"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="bottleAmount">
          Amount:
          <input
            type="text"
            name="bottleAmount"
            id="bottleAmount"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="napStart">
          Nap Start:
          <input
            type="time"
            name="napStart"
            id="napStart"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="napEnd">
          Nap End:
          <input
            type="time"
            name="napEnd"
            id="napEnd"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="diaperTime">
          Diaper Time:
          <input
            type="time"
            name="diaperTime"
            id="diaperTime"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="bottleAmount">
          Diaper Type:
          <input
            type="text"
            name="diaperKind"
            id="diaperKind"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="teacherComments">
          Teacher Comments:
          <textarea
            type="text"
            rows="4"
            cols="50"
            name="teacherComments"
            id="teacherComments"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="babyNeeds">
          Baby Needs:
          <input
            type="checkbox"
            name="babyNeeds"
            id="diapers"
            onChange={(event) => handleNeedsChange(event)}
          />
          <label htmlFor="Diapers">Diapers</label>
          <input
            type="checkbox"
            name="babyNeeds"
            id="wipes"
            onChange={(event) => handleNeedsChange(event)}
          />
          <label htmlFor="wipes">Wipes</label>
          <input
            type="checkbox"
            name="babyNeeds"
            id="diaperCream"
            onChange={(event) => handleNeedsChange(event)}
          />
          <label htmlFor="Diaper_Cream">Diaper Cream</label>
          <input
            type="checkbox"
            name="babyNeeds"
            id="formula"
            onChange={(event) => handleNeedsChange(event)}
          />
          <label htmlFor="formula">Formula</label>
          <input
            type="checkbox"
            name="babyNeeds"
            id="fingerFood"
            onChange={(event) => handleNeedsChange(event)}
          />
          <label htmlFor="fingerFood">Finger Food</label>
          <input
            type="checkbox"
            name="babyNeeds"
            id="extraClothes"
            onChange={(event) => handleNeedsChange(event)}
          />
          <label htmlFor="extraClothes">Extra Clothes</label>
        </label>
      </div>
      <div>
        <label htmlFor="babyFeels">
          Baby Feels:
          <input
            type="checkbox"
            name="babyFeels"
            id="happy"
            onChange={(event) => handleFeelsChange(event)}
          />
          <label htmlFor="happy">Happy</label>
          <input
            type="checkbox"
            name="babyFeels"
            id="usual"
            onChange={(event) => handleFeelsChange(event)}
          />
          <label htmlFor="usual">Usual</label>
          <input
            type="checkbox"
            name="babyFeels"
            id="sensitive"
            onChange={(event) => handleFeelsChange(event)}
          />
          <label htmlFor="sensitive">Sensitive</label>
          <input
            type="checkbox"
            name="babyFeels"
            id="tired"
            onChange={(event) => handleFeelsChange(event)}
          />
          <label htmlFor="tired">Tired</label>
          <input
            type="checkbox"
            name="babyFeels"
            id="active"
            onChange={(event) => handleFeelsChange(event)}
          />
          <label htmlFor="active">Active</label>
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Add Form" />
      </div>
      <p>{JSON.stringify(props)}</p>
    </form>
  );
}

export default DailyForm;
