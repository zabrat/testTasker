import { connect } from 'react-redux';
import Component from './EditTaskComponent.jsx';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    modals: selectors.getModals(state),
});

const mapDispatchToProps = dispatch => ({
    editTaskRequest: newTaskData => dispatch(actions.onEditTaskRequest(newTaskData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);