import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchChild() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/child', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
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
    yield put({ type: 'FETCH_CHILD'})
  } catch (error) {
    console.log('Child Post request failed', error);
  }
}


function* childSaga() {
  yield takeLatest('ADD_CHILD', addChild);
  yield takeLatest('FETCH_CHILD', fetchChild)
}

export default childSaga;
