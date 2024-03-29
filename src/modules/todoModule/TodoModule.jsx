import React, {useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import { TodoWrapper, MainWrapper } from './styledComponents.js';
import CustomTable  from '../components/customTable/CustomTable';
import HeaderModule from '../headerModule';
import CustomPaginator from '../components/customPaginator/CustomPaginator';
import CustomButton from '../components/customButton/CustomButton';
import { Link }  from 'react-router-dom';

const TodoModule = props => {
    const {
        tasks,
        logOut,
        isLogged,
        changePage,
        currentPage,
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
            const taskId = currentElement.id;
            const taskText = currentElement.children[2].innerText;
            const taskStatus = currentElement.children[3].innerText;

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
            return 'task is completed'
        } else if (taskStatus === 11) {
            return 'task is edited by admin and completed'
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <MainWrapper>        
                <MainWrapper.ButtonWrapper>
                    <Link to='/login'>
                        <CustomButton
                            text={isLogged ? 'Log out' : 'Sign in'}
                            height={30}
                            handleEvent={isLogged ? logOut : null}
                        />
                    </Link>
                </MainWrapper.ButtonWrapper>       
                <HeaderModule/>
                <TodoWrapper data-at={'todo-module-conatiner'}>
                    <CustomTable
                        rows={tasks}
                        isLogged={isLogged}
                        onOpenModal={onOpenModal}
                        sortHandle={sortField}
                        columnTitles={columnTitles}
                        setTaskStatusFormat={setTaskStatusFormat}
                        />
                    <CustomPaginator
                        handlePage={handlePage}
                        currentPage={currentPage}
                        pageQuantity={pageQuantity}
                        /> 
                </TodoWrapper>
            </MainWrapper>
        </ThemeProvider>
    )
}

export default React.memo(TodoModule);