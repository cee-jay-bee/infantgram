import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import UserChild from '../UserChild/UserChild';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./UserPage.css";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const child = useSelector((store)=> store.child);
  const history = useHistory();
  const dispatch = useDispatch();

  const addChild = (event) => {
    history.push('/addchild');
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_CHILD', payload: user.id });
}, []);

  return (
    <main>
      <Container>
        <h2>Welcome, {user.first_name}!</h2>

        <Button onClick={addChild}>add child</Button>
        <section className="children">
          {child.map(child =>(<UserChild key={child.id} child={child} />))}
        </section>
      </Container>
    </main>

  );
}

// this allows us to use <App /> in index.js
export default UserPage;
