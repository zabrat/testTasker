import constants from '../../constants';
import * as api from '../../REST';
import * as actions from './actions';
import formDataCreator from '../../utils/formDataCreator';
import { takeEvery, call, put } from 'redux-saga/effects';

export function* watchLoginModule() {
  yield takeEvery(constants.SIGN_IN_REQUEST, workerSignIn);
}

function* workerSignIn(action) {
  try {
    const formData = yield call(formDataCreator, action.payload)
    const response = yield call(api.logIn, formData);
    const { status, message } = response
    if (status === 'ok'){
      yield put (actions.onSignInSuccess(message.token))
    } else {
      alert(message.password)
    }
    console.log(response)
  } catch (err) {
        console.error("ERROR", err);
  }
}
