import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import UserChild from '../UserChild/UserChild';

function UserPage() {
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
    
    <div className="container">
      <div className="grid">
        <div className="grid-col grid-col_10">
        <h2>Welcome, {user.first_name}!</h2>
      <ul>
        <li>
          {child.map(child =>(<UserChild child={child} />))}
        </li>
      </ul>
        </div>
        <div className="grid-col grid-col_2">
          <center>
            <button className="btn" onClick={onAddChild} >Add Child</button>
          </center>
        </div>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
