import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import Component from './TodoModule.jsx';

const mapStateToProps = state => ({
    tasks: selectors.getTasks(state)
});

const mapDispatchToProps = dispatch => ({
    getTasksFromApi: () => dispatch(actions.onGetTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);