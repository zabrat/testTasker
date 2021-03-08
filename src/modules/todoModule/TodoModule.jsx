import React, {useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import { Wrapper } from './styledComponents.js';
import CustomTable  from '../components/customTable/CustomTable';
import HeaderModule from '../headerModule'
import CustomPaginator from '../components/customPaginator/CustomPaginator'
// import Header  from '../header';

const TodoModule = props => {
    const {
        tasks,
        changePage,
        pageQuantity,
        getTasksRequest,
        sortFieldRequest,
    } = props;


    useEffect(() => {
        getTasksRequest();
    }, [getTasksRequest])

    const columnTitles = [
        {
            id: 1,
            text: 'Id',
            name: 'id'
        },
        {
            id: 2,
            text: 'User name',
            name: 'username'
        },
        {
            id: 3,
            text: 'E-mail',
            name: 'email'
        },
        {
            id: 4,
            text: 'Task text',
            name: 'text'
        },
        {
            id: 5,
            text: 'Task status',
            name: 'status'
        }];

    const sortField = event => {
        sortFieldRequest(event.target.getAttribute('name')) 
    }

    const handlePage = event => {
        const { id } = event.target;
        changePage(id);
    }

    return(
        <ThemeProvider theme={theme}>
            <HeaderModule/>
            <Wrapper data-at={'todo-module-conatiner'}>
                <CustomTable
                    rows={tasks}
                    sortHandle={sortField}
                    columnTitles={columnTitles}
                />
                <CustomPaginator
                    pageQuantity={pageQuantity}
                    handlePage={handlePage}
                /> 
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(TodoModule);