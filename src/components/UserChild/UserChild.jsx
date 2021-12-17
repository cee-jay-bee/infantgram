import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useStyles } from '../UserChild/UserChildStyles';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./UserChild.css";


function UserChild(props) {

  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const getForm = (childID) => {
    console.log(childID);

    dispatch({type: 'FETCH_FORM', payload: childID})
    // history.push('/dailyform');
  }
  

  return (
    <Col>
      <Card
        className="childCard"
        onClick={() => getForm(props.child.id)}
        style={{ width: "10rem" }}
      >
        <Card.Img
          alt={props.child.first_name}
          variant="top"
          src={props.child.image_path}
        />
        <Card.Body>
          <Card.Title>{props.child.first_name} {props.child.last_name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    // <div>
    //   {/* <Box sx={{boxShadow: 3}} m={2} pt={1} >
    //     <Grid item sx={3} > */}
    //       <Card className={classes.root}>
    //         <Typography gutterBottom variant="body1" component="div">{props.child.id} {props.child.first_name} {props.child.last_name}</Typography>
    //         <CardMedia
    //           component="img"
    //           className={classes.media}
    //           image={props.child.image_path}
    //           id={props.child.id}
    //           onClick={()=> handleClickEvent(props.child.id)}
              
    //         />
    //         <Typography variant="body2" color="textSecondary">Allergies: {props.child.allergies}</Typography>
    //         <br /><br />
    //       </Card>
    //     {/* </Grid>
    //   </Box> */}
    // </div>
  );
}

// this allows us to use <App /> in index.js
export default UserChild;
