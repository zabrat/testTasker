import { connect } from 'react-redux';
import Component from './EditTaskComponent.jsx';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    modals: selectors.getModals(state),
    userToken: selectors.getUserToken(state)
});

const mapDispatchToProps = dispatch => ({
    editTaskRequest: newTaskData => dispatch(actions.onEditTaskRequest(newTaskData)),
    getTasksRequest: () => dispatch(actions.onGetTasksRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);