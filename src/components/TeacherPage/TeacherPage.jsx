import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import UserChild from '../UserChild/UserChild';


function TeacherPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const child = useSelector((store)=> store.child);
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("user is:", user);
    dispatch({ type: 'FETCH_CHILDREN', payload: user.id });
  }, []);

  return (
    
    <div>
      <h1>{child[0].classroom_name} Classroom</h1>
      <ul>
        <li>
          {child.map(child =>(<UserChild child={child} />))}
        </li>
      </ul>
    </div>
  )
}

// this allows us to use <App /> in index.js
export default TeacherPage;
