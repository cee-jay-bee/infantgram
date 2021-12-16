import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function TeacherPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const child = useSelector((store)=> store.child);
  const history = useHistory();
  const dispatch = useDispatch();

  const onAddChild = (event) => {
    history.push('/addchild');
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_CHILD', payload: user.id });
}, []);

  return (
    
    <div>
      <p>TEACHER PAGE</p>
    </div>
  )
}

// this allows us to use <App /> in index.js
export default TeacherPage;
