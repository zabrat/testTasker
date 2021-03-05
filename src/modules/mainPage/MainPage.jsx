import React from 'react';
import TodoModule from '../todoModule';
import { Wrapper } from './styledComponents'

const MainPage = () => {
    return (
        <Wrapper>
            <TodoModule/>
        </Wrapper>
    )
}

export default React.memo(MainPage);