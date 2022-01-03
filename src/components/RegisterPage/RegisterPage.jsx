import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          style= {{color: "#f2f2f2"}}
          onClick={() => {
            history.push('/login');
          }}
        >
          already a member?
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
