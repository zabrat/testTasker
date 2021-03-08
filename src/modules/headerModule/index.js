import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import Component from './HeaderModule.jsx';

const mapStateToProps = state => ({
    tasks: selectors.getTasks(state)
});

const mapDispatchToProps = dispatch => ({
    addTaskRequest: (taskData) => dispatch(actions.onAddTaskRequest(taskData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);