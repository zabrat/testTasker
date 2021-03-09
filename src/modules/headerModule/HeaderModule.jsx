import React, { useState } from 'react';
import { Wrapper } from './styledComponents';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import formDataCreator from '../../utils/formDataCreator'
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
    }

    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.FormWrapper onSubmit={onAddTask}>
                    <CustomInput
                        label='Name'
                        name='username'
                        width={80}
                        handleChange={getInputValue}
                        display='inline'
                    />
                    <CustomInput
                        label='Email'
                        name='email'
                        display='inline'
                        width={80}
                        handleChange={getInputValue}
                    />
                    <CustomInput
                        display='inline'
                        label='Task'
                        width={80}
                        name='text'
                        handleChange={getInputValue}
                    />
                    <CustomButton
                        type={'submit'}
                        height={30}
                        width={300}
                        text={'Add task'}
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(HeaderModule);