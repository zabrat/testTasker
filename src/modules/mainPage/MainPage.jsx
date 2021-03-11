import React from 'react';
import TodoModule from '../todoModule';
import { Wrapper } from './styledComponents';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoginModule from '../logInModule';
import Modals from '../modals'

const MainPage = () => {
    return (
        <Router>
            <Switch>
                <Wrapper>
                    <Route exact path="/" component={TodoModule}/>
                    <Route path="/login" component={LoginModule}/>
                    <Modals/>
                </Wrapper>
            </Switch>
        </Router>
    )
}

export default React.memo(MainPage);