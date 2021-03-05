import React, {useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import { Wrapper } from './styledComponents.js';
import CustomTable  from '../components/customTable/CustomTable';
import HeaderModule from '../headerModule/HeaderModule'
// import Header  from '../header';



const TodoModule = props => {
    const {
        tasks,
        getTasksFromApi
    } = props;


    useEffect(() => {
        getTasksFromApi();
    }, [])

    const columnTitles = ['User name', 'E-mail', 'Task text', 'Task status'];

    return(
        <ThemeProvider theme={theme}>
            <HeaderModule/>
            <Wrapper data-at={'todo-module-conatiner'}>
                <CustomTable
                    rows={tasks}
                    columnTitles={columnTitles}/>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(TodoModule);