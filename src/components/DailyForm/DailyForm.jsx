import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function DailyForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const errors = useSelector((store) => store.errors);
  const user = useSelector((store) => store.user);
  const child = useSelector((store)=> store.child);
  const dailyForm = useSelector((store) => store.dailyForm);
 
  const [ newDailyForm, setNewDailyForm ] = useState( {} );
  let needsArr = [];
  let feelsArr = [];

  const [wakeup, setWakeup] = useState( '' );
  const [breakfast, setBreakfast] = useState( '' );
  const [breakfastFood, setBreakfastFood] = useState( '' );
  const [parentComments, setParentComments] = useState( '' );
  const [diaperChangeTime, setDiaperChangeTime] = useState( '' );
  const [pickupTime, setPickUpTime] = useState( '' );
  const [bottleTime, setBottleTime] = useState( '' );
  const [bottleAmount, setBottleAmount] = useState( '' );
  const [napStart, setNapStart] = useState( '' );
  const [napEnd, setNapEnd] = useState( '' );
  const [diaperTime, setDiaperTime] = useState( '' );
  const [diaperKind, setDiaperKind] = useState( '' );
  const [needs, setNeeds] = useState( '' );
  const [feelings, setFeelings] = useState( '' );
  const [teacherComments, setTeacherComments] = useState( '' );
  const [feedingInfoTime, setFeedingInfoTime] = useState( '' );
  const [feedingInfoFood, setFeedingInfoFood] = useState( '' );


  useEffect(()=> {
    if (dailyForm.wakeup){
      setWakeup(dailyForm.wakeup);
    }
    if (dailyForm.breakfast){
    setBreakfast(dailyForm.breakfast);
    }
    if (dailyForm.breakfast_food){
    setBreakfastFood(dailyForm.breakfast_food);
    }
    if (dailyForm.parent_comments){
    setParentComments(dailyForm.parent_comments);
    }
    if (dailyForm.diaper_change_time){
    setDiaperChangeTime(dailyForm.diaper_change_time);
    }
    if (dailyForm.pickup_time){
    setPickUpTime(dailyForm.pickup_time);
    }
    if (dailyForm.bottles) {
      if (dailyForm.bottles.time){
        setBottleTime(dailyForm.bottles.time);
      }
    
      if (dailyForm.bottles.amount){
        setBottleAmount(dailyForm.bottles.amount);
      }
    }
    if (dailyForm.naps) {
      if (dailyForm.naps.nap_start){
        setNapStart(dailyForm.naps.nap_start);
      }
      if (dailyForm.naps.nap_end){
        setNapEnd(dailyForm.naps.nap_end);
      }
    }
    if (dailyForm.diapers) {
      if (dailyForm.diapers.diaper_time){
        setDiaperTime(dailyForm.diapers.diaper_time);
      }
      if (dailyForm.diapers.diaper_kind){
        setDiaperKind(dailyForm.diapers.diaper_kind);
      }
    }
    if (dailyForm.teacher_comments){
    setTeacherComments(dailyForm.teacher_comments);
    }
    if (dailyForm.feeding_information) {
      if (dailyForm.feeding_information.time){
        setFeedingInfoTime(dailyForm.feeding_information.time);
      }
      if (dailyForm.feeding_information.food){
        setFeedingInfoFood(dailyForm.feeding_information.food);
      }
    }
  }, [dailyForm]);

    //By using event.target.id, we can know which form property is being changed. Therefore, we only
    //need one function to handle the change on all input texts on the screen.
  // const handleChange = ( event ) =>{
    
  //   setNewDailyForm( {...newDailyForm, [ event.target.id ] : event.target.value  } );
      
  // }

  const handleNeedsChange = (event) => {
    needsArr.push(event.target.id);
    console.log(needsArr);
  }

  const handleFeelsChange = (event) => {
    feelsArr.push(event.target.id);
    console.log(feelsArr);
  }

  const changeDailyForm = (event) => {
    event.preventDefault();

    console.log({
      wakeup: wakeup,
      child_id: props.child,
      breakfast: breakfast,
      breakfast_food: breakfastFood,
      parent_comments: parentComments,
      diaper_change_time: diaperChangeTime,
      pickup_time: pickupTime,
      bottles: {time: bottleTime, amount: bottleAmount},
      naps: {start: napStart, end: napEnd},
      diapers: {time: diaperTime, kind: diaperKind},
      teacher_comments: teacherComments,
      feeding_information: {time: feedingInfoTime, food: feedingInfoFood}
    });

    console.log(needsArr);
    console.log(feelsArr);
    
    dispatch({
        type: 'ADD_FORM',
        payload: {
          wakeup: wakeup,
          child_id: props.child,
          breakfast: breakfast,
          breakfast_food: breakfastFood,
          parent_comments: parentComments,
          diaper_change_time: diaperChangeTime,
          pickup_time: pickupTime,
          bottles: {time: bottleTime, amount: bottleAmount},
          naps: {nap_start: napStart, nap_end: napEnd},
          diapers: {diaper_time: diaperTime, diaper_kind: diaperKind},
          teacher_comments: teacherComments,
          feeding_information: {time: feedingInfoTime, food: feedingInfoFood},
          babyNeeds: needsArr,
          babyFeels: feelsArr
        },
      });

    // if (newDailyForm.id){
    //   // dispatch({
    //   //   type: 'UPDATE_FORM',
    //   //   payload: {
    //   //     dailyForm: newDailyForm,
    //   //   },
    //   // });
    //   console.log("test Update");
    // } else {
    //   dispatch({
    //     type: 'ADD_FORM',
    //     payload: {
    //       dailyForm: newDailyForm,
    //       babyNeeds: needsArr,
    //       babyFeels: feelsArr
    //     },
    //   });
    //   console.log("test add");
    // }
    

    // history.push('/user');
  }; // end registerUser

  return (
    
    <form className="formPanel" onSubmit={changeDailyForm}>
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
        <label htmlFor="wakeup">
          Wakeup Time:
          <input
            type="time"
            name="wakeup"
            id="wakeup"
            value={wakeup}
            required
            onChange={(event) => setWakeup(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="breakfast">
          Breakfast Time:
          <input
            type="time"
            name="breakfast"
            id="breakfast"
            value={breakfast}
            required
            onChange={(event) => setBreakfast(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="breakfast_food">
          Breakfast Food:
          <input
            type="text"
            name="breakfast_food"
            id="breakfast_food"
            value={breakfastFood}
            required
            onChange={(event) => setBreakfastFood(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="diaper_change_time">
          Diaper Change Time:
          <input
            type="time"
            name="diaper_change_time"
            id="diaper_change_time"
            value={diaperChangeTime}
            required
            onChange={(event) => setDiaperChangeTime(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="pickup_time">
          Pickup Time:
          <input
            type="time"
            name="pickup_time"
            id="pickup_time"
            value={pickupTime}
            required
            onChange={(event) => setPickUpTime(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="parent_comments">
          Special Instructions:
          <input
            type="text"
            name="parent_comments"
            id="parent_comments"
            value={parentComments}
            onChange={(event) => setParentComments(event.target.value)}
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
            value={feedingInfoTime}
            onChange={(event) => setFeedingInfoTime(event.target.value)}
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
            value={feedingInfoFood}
            onChange={(event) => setFeedingInfoFood(event.target.value)}
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
            value={bottleTime}
            onChange={(event) => setBottleTime(event.target.value)}
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
            value={bottleAmount}
            onChange={(event) => setBottleAmount(event.target.value)}
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
            value={napStart}
            onChange={(event) => setNapStart(event.target.value)}
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
            value={napEnd}
            onChange={(event) => setNapEnd(event.target.value)}
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
            value={diaperTime}
            onChange={(event) => setDiaperTime(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="diaperKind">
          Diaper Type:
          <input
            type="text"
            name="diaperKind"
            id="diaperKind"
            value={diaperKind}
            onChange={(event) => setDiaperKind(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="teacher_comments">
          Teacher Comments:
          <textarea
            type="text"
            rows="4"
            cols="50"
            name="teacher_comments"
            id="teacher_comments"
            value={teacherComments}
            onChange={(event) => setTeacherComments(event.target.value)}
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
        {
          dailyForm.wakeup ?
            <input className="btn" type="submit" name="edit" value="Edit Form" /> :
            <input className="btn" type="submit" name="submit" value="Add Form" />
        }
      </div>
    </form>
  );
}

export default DailyForm;
