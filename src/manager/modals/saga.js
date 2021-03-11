import constants from '../../constants';
import * as api from '../../REST';
import formDataCreator from '../../utils/formDataCreator';
import { takeEvery, call } from 'redux-saga/effects';

export function* watchModals() {
  yield takeEvery(constants.EDIT_TASK_REQUEST, workerEditTask);
}

function* workerEditTask(action) {
  try {
    console.log(action.payload)
      const formData = yield call(formDataCreator, action.payload)
      const response = yield call(api.editTask, formData, action.payload.id);
      // const { status, message } = response

      console.log(response)
      // if (status === 'ok'){
      //   yield put (actions.onSignInSuccess(message.token))
      //   localStorage.setItem('userToken', JSON.stringify(message.token))
      // } else {
      //   alert(message.password)
      // }
  } catch (err) {
        console.error("ERROR", err);
  }
}
