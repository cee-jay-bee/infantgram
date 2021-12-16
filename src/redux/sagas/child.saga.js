import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchChild(action) {
  try {
    const response = yield axios.get(`/api/child/${action.payload}`);
    
    yield put({ type: 'SET_CHILD', payload: response.data });
  } catch (error) {
    console.log('Child get request failed', error);
  }
}
function* addChild(action) {
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


function* childSaga() {
  yield takeLatest('ADD_CHILD', addChild);
  yield takeLatest('FETCH_CHILD', fetchChild)
}

export default childSaga;
