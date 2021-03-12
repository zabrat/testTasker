import { connect } from 'react-redux';
import * as actions from './actions';
import Component from './LogInModule.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    signInRequest: (userData) => dispatch(actions.onSignInRequest(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);