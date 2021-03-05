import { all, call } from 'redux-saga/effects'
import { watchTodoModule } from '../../manager/todoModule/saga'

const sagaList = [
    watchTodoModule 
];

export function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
