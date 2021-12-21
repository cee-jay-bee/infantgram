import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import DailyForm from '../DailyForm/DailyForm';

function DailyFormPage() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <DailyForm child={location.state} />
    </div>
  );
}

export default DailyFormPage;
