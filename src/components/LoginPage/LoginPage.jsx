import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          style={{color: '#f2f2f2'}}
          onClick={() => {
            history.push('/registration');
          }}
        >
         not a member?
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
