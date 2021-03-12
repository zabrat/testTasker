import React from 'react';
import TodoModule from '../todoModule';
import { Wrapper } from './styledComponents';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginModule from '../logInModule';
import Modals from '../modals';

const MainPage = props => {
    const { isLogged } = props;

    return (
        <Router>
            <Switch>
                <Wrapper>
                    <Route exact path="/" component={TodoModule}/>
                    <Route path="/login">
                        {isLogged ? <Redirect to="/" /> : <LoginModule />}
                    </Route>
                    <Modals/>
                </Wrapper>
            </Switch>
        </Router>
    )
}

export default React.memo(MainPage);