import React, { useState } from 'react';
import { Wrapper } from './styledComponents';
import CustomInput from '../../../components/customInput/CustomInput';
import CustomButton from '../../../components/customButton/CustomButton';
import { ThemeProvider } from 'styled-components';
import theme from '../../../themes/colors';

const EditTaskComponent = props => {
    const {
        onClose,
        modalData,
        editTaskRequest,
        getTasksRequest,
    } = props;

    const isTaskChecked = (modalData.data.taskStatus ===  "task isn't completed") 
    || (modalData.data.taskStatus === "task isn't completed, edited by admin") ? false : true;
    
    const [taskText, setTaskText] = useState(modalData.data.taskText);
    const [isTaskDone, setIsTaskDone] = useState(isTaskChecked);

    console.log(isTaskChecked)
    console.log(isTaskDone)
    console.log(modalData)

    const getInputValue = event => {
        setTaskText(event.target.value)
    }

    const getCheckboxStatus = event => {
        setIsTaskDone(event.target.checked)
    }

    const onSubmit = () => {
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
            token: JSON.parse(localStorage.getItem('userToken')),
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
                        width={70}
                        inputBackground={theme.colorFont}
                        handleChange={getInputValue}
                    />
                    <CustomInput 
                        type='checkbox'
                        checked={isTaskDone}
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