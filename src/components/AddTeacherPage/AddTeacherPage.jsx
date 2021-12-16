import React from 'react';

import { useHistory } from 'react-router-dom';
import AddTeacherForm from '../AddTeacherForm/AddTeacherForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <AddTeacherForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
