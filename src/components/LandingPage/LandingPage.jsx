import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import LoginPage from '../LoginPage/LoginPage';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      <LoginPage />
      
    </div>
  );
}

export default LandingPage;
