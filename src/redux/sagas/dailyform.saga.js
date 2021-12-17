import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchForm(action) {
  console.log(action.payload);
  try {
    const response = yield axios.get(`/api/form/${action.payload}`);
    
    yield put({ type: 'SET_FORM', payload: response.data });
  } catch (error) {
    console.log('Child get request failed', error);
  }
}

function* addForm(action) {
  try {
    console.log(action.payload);
    const response = yield axios.post('/api/child', action.payload);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'FETCH_CHILD', payload: action.payload.parentID})
  } catch (error) {
    console.log('Child Post request failed', error);
  }
}


function* formSaga() {
  yield takeLatest('ADD_FORM', addForm);
  yield takeLatest('FETCH_FORM', fetchForm);
}

export default formSaga;
