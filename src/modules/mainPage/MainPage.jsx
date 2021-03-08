import React from 'react';
import TodoModule from '../todoModule';
import { Wrapper } from './styledComponents';
import LoginModule from '../logInModule';

const MainPage = () => {
    return (
        <Wrapper>
            <TodoModule/>
        </Wrapper>
    )
}

export default React.memo(MainPage);