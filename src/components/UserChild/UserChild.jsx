import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useStyles } from '../UserChild/UserChildStyles';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./UserChild.css";
import Button from "react-bootstrap/Button";


function UserChild(props) {

  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector((store) => store.user);

  useEffect(()=>{ 
    dispatch({type: 'UNSET_FORM'});
  }, []);

  // let birthDate = props.child.birth_date;
  // console.log(birthDate.toString().replace(/-/g, '.').split('T')[0]);
  // console.log(birthDate.toLocaleString("en-US").replace(/-/g, '.').split('T')[0]);

  const deleteChild = (childID) => {
    console.log(childID);
    dispatch({type: 'DELETE_CHILD',
      payload: {childID: childID,
        parentID: user.id}
    })
  }

  const getForm = (childID) => {
    console.log(childID);

    dispatch({type: 'FETCH_FORM', payload: childID});
    history.push({
      pathname: '/dailyform',
      state: props.child.id
    });
  }
  

  return (
    <Col>
      <Card
        className="childCard"
        onClick={() => getForm(props.child.id)}
        style={{ width: "15rem" }}
      >
        <Card.Img
          alt={props.child.first_name}
          variant="top"
          src={props.child.image_path}
        />
        <Card.Body>
          <Card.Title style={{fontFamily: 'monospace'}}>{props.child.first_name} {props.child.last_name}</Card.Title>
          <Card.Text className="mb-2">Allergies:<br />
          {props.child.allergies}</Card.Text>
        </Card.Body>
      </Card>
      {user.role === 'parent' ?
        <Button variant="primary" style={{backgroundColor: 'lightgrey', color:'black', width: '15rem'}} className="btn" onClick={() => deleteChild(props.child.id)} > Remove from Daycare </Button> :
        <p></p>
      }
    </Col>
  );
}

// this allows us to use <App /> in index.js
export default UserChild;
