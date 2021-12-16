import React from 'react';

import { useHistory } from 'react-router-dom';
import DailyForm from '../DailyForm/DailyForm';

function AddChildPage() {
  const history = useHistory();

  return (
    <div>
      <DailyForm />
    </div>
  );
}

export default AddChildPage;
