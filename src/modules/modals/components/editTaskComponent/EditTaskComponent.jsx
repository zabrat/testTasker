import React, { useCallback, useState} from 'react';
import constants from '../../../../constants'
import { Wrapper } from './styledComponents';
import CustomInput from '../../../components/customInput/CustomInput';
import CustomButton from '../../../components/customButton/CustomButton';
import { ThemeProvider } from 'styled-components';
import theme from '../../../themes/colors';

const EditTaskComponent = props => {
    const {
        modalData,
        userToken,
        editTaskRequest,
        getTasksRequest,
        closeModalWindow,
    } = props;

    const [taskText, setTaskText] = useState(modalData.data.taskText);
    const [isTaskDone, setIsTaskDone] = useState((modalData.data.taskStatus ===  '1') || (modalData.data.taskStatus === '0') ? false : true);

    const onClose = useCallback(() => {
        closeModalWindow({
            type: constants.EDIT_TASK_MODAL_WINDOW_TYPE,
        });
    }, [modalData.isShow]);

    const getInputValue = event => {
        setTaskText(event.target.value)
    }

    const getCheckboxStatus = event => {
        setIsTaskDone(event.target.checked)
    }

    const onSubmit = () => {
        console.log(isTaskDone)
        let taskStatus = 0;
        
        if((modalData.data.taskText === taskText) && isTaskDone){
            taskStatus = 10;
        } else if (!(modalData.data.taskText === taskText) && isTaskDone){
            taskStatus = 11;
        } else if (!(modalData.data.taskText === taskText) && !isTaskDone){
            taskStatus = 1;
        }

        const newTaskData = {
            id: modalData.data.taskId,
            token: userToken,
            text: taskText,
            status: taskStatus
        }

        editTaskRequest(newTaskData);
        getTasksRequest();

        onClose();
    }

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.exitBtn 
                    data-at='wrapper_exitBtn'
                    children='X'
                    onClick={onClose}
                    />
                <Wrapper.FormWrapper onSubmit={onSubmit}>
                    <CustomInput 
                        value={taskText}
                        name='task-text'
                        label='Task text'
                        labelColor={theme.colorFont}
                        fontSize={25}
                        height={30}
                        width={80}
                        inputBackground={theme.colorFont}
                        handleChange={getInputValue}
                    />
                    <CustomInput 
                        type='checkbox'
                        // value={userData.password}
                        label='Task status'
                        labelColor={theme.colorFont}
                        fontSize={25}
                        inputBackground={theme.colorFont}  
                        handleChange={getCheckboxStatus} 
                    />
                    <CustomButton 
                        type='submit'
                        height={30}
                        text='Save'
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(EditTaskComponent);

