import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import Component from './TodoModule.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);