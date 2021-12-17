import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Typography, Grid, Container, Box, Button, Table, TableHead, TableBody, TableCell, TableContainer,
  TableRow, Paper, Card, CardMedia } from '@material-ui/core';


function UserChild(props) {

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickEvent = (childID) => {
    console.log(childID);

    dispatch({type: 'FETCH_FORM', payload: childID})
    // history.push('/dailyform');
  }
  

  return (
    
    <div>
      <Box sx={{boxShadow: 3}} m={2} pt={1} >
        <Grid item sx={4} >
          <Card sx={{ maxWidth: 400 }}>
            <Typography gutterBottom variant="h5" component="div">{props.child.id} {props.child.first_name} {props.child.last_name}</Typography>
            <CardMedia
              component="img"
              height="300"
              image={props.child.image_path}
              id={props.child.id}
              onClick={()=> handleClickEvent(props.child.id)}
              
            />
            <Typography variant="body2" color="textSecondary">Allergies: {props.child.allergies}</Typography>
            <br></br>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserChild;
