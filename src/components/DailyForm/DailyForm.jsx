import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './DailyForm.css';


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
    if (dailyForm.bottle_time){
      setBottleTime(dailyForm.bottle_time);
    }
    if (dailyForm.bottle_amount){
      setBottleAmount(dailyForm.bottle_amount);
    }
    if (dailyForm.nap_start){
      setNapStart(dailyForm.nap_start);
    }
    if (dailyForm.nap_end){
      setNapEnd(dailyForm.nap_end);
    }
    if (dailyForm.diaper_time){
      setDiaperTime(dailyForm.diaper_time);
    }
    if (dailyForm.diaper_kind){
      setDiaperKind(dailyForm.diaper_kind);
    }
    if (dailyForm.teacher_comments){
    setTeacherComments(dailyForm.teacher_comments);
    }
    if (dailyForm.feeding_time){
      setFeedingInfoTime(dailyForm.feeding_time);
    }
    if (dailyForm.feeding_food){
      setFeedingInfoFood(dailyForm.feeding_food);
    }
  }, [dailyForm]);

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

    console.log(needsArr);
    console.log(feelsArr);

    if (dailyForm.id){
      dispatch({
        type: 'UPDATE_FORM',
        payload: {
          id: dailyForm.id,
          wakeup: wakeup,
          child_id: props.child,
          breakfast: breakfast,
          breakfast_food: breakfastFood,
          parent_comments: parentComments,
          diaper_change_time: diaperChangeTime,
          pickup_time: pickupTime,
          bottle_time: bottleTime, 
          bottle_amount: bottleAmount,
          nap_start: napStart,
          nap_end: napEnd,
          diaper_time: diaperTime, 
          diaper_kind: diaperKind,
          teacher_comments: teacherComments,
          feeding_time: feedingInfoTime,
          feeding_food: feedingInfoFood,
          babyNeeds: needsArr,
          babyFeels: feelsArr
        },
      });
      console.log("test Update");
    } else {
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
          bottle_time: bottleTime, 
          bottle_amount: bottleAmount,
          nap_start: napStart,
          nap_end: napEnd,
          diaper_time: diaperTime, 
          diaper_kind: diaperKind,
          teacher_comments: teacherComments,
          feeding_time: feedingInfoTime,
          feeding_food: feedingInfoFood,
          babyNeeds: needsArr,
          babyFeels: feelsArr
        },
      });
      console.log("test add");
    }
    

    history.push('/user');
  }; // end registerUser

  return (

    <Form onSubmit={changeDailyForm} id='dailyForm'>
      <Form.Label style={{color: 'lightgrey'}}>Parent Information</Form.Label>
      <Row style={{backgroundColor: 'lightgrey'}}>
        <Col id="parentInfo">
          <Form.Group className="mb-3" controlId="wakeup">
          <Form.Text>Child Woke Up</Form.Text>
          <Form.Control type="time" value={wakeup}  onChange={(event) => setWakeup(event.target.value)} required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="diaperChangeTime">
          <Form.Text>Last Diaper Change</Form.Text>
          <Form.Control type="time" value={diaperChangeTime} onChange={(event) => setDiaperChangeTime(event.target.value)} required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="breakfastTime">
          <Form.Text>Last Feeding</Form.Text>
          <Form.Control type="time" value={breakfast} onChange={(event) => setBreakfast(event.target.value)} required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="pickupTime">
          <Form.Text>Expected Pickup Time</Form.Text>
          <Form.Control type="time" value={pickupTime} onChange={(event) => setPickUpTime(event.target.value)} required />
          </Form.Group>
        </Col>
      </Row>

      <Row style={{backgroundColor: 'lightgrey'}}>
        <Col>
          <Form.Group className="mb-3" controlId="breakfastFood">
          <Form.Text>Breakfast Food</Form.Text>
          <Form.Control type="input" value={breakfastFood} onChange={(event) => setBreakfastFood(event.target.value)} required />
          <Form.Text className="text-muted">
            What did your child eat for breakfast?
          </Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="parentComments">
          <Form.Text>Special Instructions</Form.Text>
          <Form.Control type="input" value={parentComments} onChange={(event) => setParentComments(event.target.value)} required />
          <Form.Text className="text-muted">
            Any special Instructions for today?
          </Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <br />
      <Form.Label style={{color: 'lightgrey'}}>Daycare Information</Form.Label>
      <Row style={{backgroundColor: '#d7a9e2'}}>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="feedingInfoTime">
          <Form.Text>Feeding Time</Form.Text>
          <Form.Control type="time" value={feedingInfoTime} onChange={(event) => setFeedingInfoTime(event.target.value)} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="feedingInfoFood">
          <Form.Text>What, Amount, Comments:</Form.Text>
          <Form.Control type="input" value={feedingInfoFood} onChange={(event) => setFeedingInfoFood(event.target.value)} />
          </Form.Group>
        </Col>
      </Row>

      <Row style={{backgroundColor: '#d7a9e2'}}>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="bottleTime">
          <Form.Text>Bottle Time</Form.Text>
          <Form.Control type="time" value={bottleTime} onChange={(event) => setBottleTime(event.target.value)} />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="bottleAmount">
          <Form.Text>Bottle Amount</Form.Text>
          <Form.Control type="input" value={bottleAmount} onChange={(event) => setBottleAmount(event.target.value)} />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="napStart">
          <Form.Text>Nap Start Time</Form.Text>
          <Form.Control type="time" value={napStart} onChange={(event) => setNapStart(event.target.value)} />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="napEnd">
          <Form.Text>Nap End Time</Form.Text>
          <Form.Control type="time" value={napEnd} onChange={(event) => setNapEnd(event.target.value)} />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="diaperTime">
          <Form.Text>Diaper Time</Form.Text>
          <Form.Control type="time" value={diaperTime} onChange={(event) => setDiaperTime(event.target.value)} />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="diaperKind">
          <Form.Text>Diaper Type</Form.Text>
          <Form.Control type="input" value={diaperKind} onChange={(event) => setDiaperKind(event.target.value)} />
          </Form.Group>
        </Col>
      </Row>

      <Row style={{backgroundColor: '#d7a9e2'}}>
        <Col>
          <Form.Text className="text-bold">
            Baby Needs:
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Diapers" />
            <Form.Check type="checkbox" label="Wipes" />
            <Form.Check type="checkbox" label="Diaper Cream" />
            <Form.Check type="checkbox" label="Formula" />
            <Form.Check type="checkbox" label="Finger Food" />
            <Form.Check type="checkbox" label="Extra Clothes" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Text className="text-bold">
            Comments:
          </Form.Text>
          <Form.Group className="mb-3" controlId="teacherComments">
          <Form.Control as="textarea" rows={6} value={teacherComments} onChange={(event) => setTeacherComments(event.target.value)}/>
          </Form.Group>
        </Col>
      </Row>

      <Row style={{backgroundColor: '#d7a9e2'}}>
        <Form.Text className="text-bold">
          Baby Seems:
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Happy" inline />
          <Form.Check type="checkbox" label="Usual" inline />
          <Form.Check type="checkbox" label="Sensitive" inline />
          <Form.Check type="checkbox" label="Tired" inline />
          <Form.Check type="checkbox" label="Active" inline />
        </Form.Group>
      </Row>
      <Col lg>
      {
        dailyForm.wakeup ?
          <center><Button variant="primary" type="submit" size="lg" > Edit </Button></center> :
          <center><Button variant="primary" type="submit" size="lg" > Submit </Button> </center>
      }
      </Col>
    
  </Form>
  );
}

export default DailyForm;
