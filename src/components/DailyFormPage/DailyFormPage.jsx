import React from 'react';

import { useHistory } from 'react-router-dom';
import AddChildForm from '../AddChildForm/AddChildForm';

function AddChildPage() {
  const history = useHistory();

  return (
    <div>
      <AddChildForm />
    </div>
  );
}

export default AddChildPage;
