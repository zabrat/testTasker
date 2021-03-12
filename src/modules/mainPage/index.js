import { connect } from 'react-redux';
import * as selectors from './selectors';
import Component from './MainPage.jsx';

const mapStateToProps = state => ({
    isLogged: selectors.getUserStatus(state),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);