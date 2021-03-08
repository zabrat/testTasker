import constants from "../../constants";
import * as api from '../../REST';
import * as actions from './actions';
import formDataCreator from '../../utils/formDataCreator';
import { takeEvery, call, put } from "redux-saga/effects";

export function* watchHeaderModule() {
  yield takeEvery(constants.ADD_TASK_REQUEST, workerAddTask);
}

function* workerAddTask(action) {
  try {
    const formData = yield call(formDataCreator, action.payload)
    const response = yield call(api.addTask, formData);
    console.log(response)
  } catch (err) {
    console.error("ERROR", err);
  }
}
