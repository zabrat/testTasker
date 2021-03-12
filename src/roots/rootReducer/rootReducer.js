import { combineReducers } from 'redux';
import todoModule from '../../manager/todoModule/reducer';
import loginModule from '../../manager/loginModule/reducer';
import modals from '../../manager/modals/reducer';

export default combineReducers({
    todoModule, loginModule, modals
});
