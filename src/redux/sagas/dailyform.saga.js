import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchForm(action) {
  console.log("fetchform:", action);
  try {
    const response = yield axios.get(`/api/form/${action.payload}`);
    
    yield put({ type: 'SET_FORM', payload: response.data});
  } catch (error) {
    console.log('Child get request failed', error);
  }
}

function* addForm(action) {
  console.log("saga action.payload", action.payload.child_id);
  try {
    
    const response = yield axios.post('/api/form', action.payload);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'FETCH_FORM', payload: action.payload.child_id })
  } catch (error) {
    console.log('Child Post request failed', error);
  }
}


function* formSaga() {
  yield takeLatest('ADD_FORM', addForm);
  yield takeLatest('FETCH_FORM', fetchForm);
}

export default formSaga;
