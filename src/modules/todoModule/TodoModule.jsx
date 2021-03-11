import React, {useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import { Wrapper } from './styledComponents.js';
import CustomTable  from '../components/customTable/CustomTable';
import HeaderModule from '../headerModule';
import CustomPaginator from '../components/customPaginator/CustomPaginator';
import CustomButton from '../components/customButton/CustomButton';
import { Link }  from 'react-router-dom';

const TodoModule = props => {
    const {
        tasks,
        isLogged,
        changePage,
        pageQuantity,
        checkUserStatus,
        getTasksRequest,
        sortFieldRequest,
        openEditTaskModal,
    } = props;


    useEffect(() => {
        getTasksRequest();
        checkUserStatus();
    }, [getTasksRequest, checkUserStatus])

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

    const onOpenModal = event => {
        if(isLogged){
            let currentElement = event.target;

            if (!(currentElement.tagName === 'DIV')){
                currentElement = currentElement.parentElement
            } 
            const taskId = currentElement.children[0].innerText;
            const taskText = currentElement.children[3].innerText;
            const taskStatus = currentElement.children[4].innerText;

            const taskData = {
                taskId,
                taskText,
                taskStatus
            }

            openEditTaskModal(taskData);
        }
    }

    const setTaskStatusFormat = taskStatus => {
        if(taskStatus === 0){
            return "task isn't completed"
        } else if (taskStatus === 1) {
            return "task isn't completed, edited by admin"
        } else if (taskStatus === 10) {
            return "task is completed"
        } else if (taskStatus === 11) {
            return "task is edited by admin and completed"
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <Link to='/login'>
                <CustomButton
                    text='Sign in'
                />
            </Link>
            <HeaderModule/>
            <Wrapper data-at={'todo-module-conatiner'}>
                <CustomTable
                    rows={tasks}
                    setTaskStatusFormat={setTaskStatusFormat}
                    isLogged={isLogged}
                    onOpenModal={onOpenModal}
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