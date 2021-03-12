import { all, call } from 'redux-saga/effects';
import { watchTodoModule } from '../../manager/todoModule/saga';
import { watchHeaderModule } from '../../manager/headerModule/saga';
import { watchLoginModule } from '../../manager/loginModule/saga';
import { watchModals } from '../../manager/modals/saga';

const sagaList = [
    watchTodoModule, watchHeaderModule, watchLoginModule, watchModals
];

export function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
