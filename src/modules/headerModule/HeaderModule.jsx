import React, { useState } from 'react';
import { Wrapper, FormWrapper } from './styledComponents';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import CustomInput from '../components/customInput/CustomInput';
import CustomButton from '../components/customButton/CustomButton';

const HeaderModule = props => {
    const {
        addTaskRequest
    } = props
    const [taskData, setTaskData] = useState(
        {
            username: '',
            email: '',
            text: ''
        } 
    );

    const getInputValue = event => {
        const { name, value} = event.target;
        setTaskData(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const onAddTask = event => {
        event.preventDefault();
        addTaskRequest(taskData)
        setTaskData({
            username: '',
            email: '',
            text: ''
        })
    }

    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.FormWrapper onSubmit={onAddTask}>
                    <FormWrapper.InputsWrapper>
                        <CustomInput
                            label='Name'
                            value={taskData.username}
                            name='username'
                            width={90}
                            required={true}
                            handleChange={getInputValue}
                            display='inline'
                        />
                        <CustomInput
                            label='Email'
                            value={taskData.email}
                            name='email'
                            required={true}
                            type='email'
                            display='inline'
                            width={90}
                            handleChange={getInputValue}
                        />
                        <CustomInput
                            display='inline'
                            value={taskData.text}
                            label='Task'
                            required={true}
                            width={90}
                            height={50}
                            name='text'
                            handleChange={getInputValue}
                        />
                    </FormWrapper.InputsWrapper>
                    <CustomButton
                        type='submit'
                        height={60}
                        text='Add task'
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(HeaderModule);