import React, { useState } from 'react';
import { Wrapper } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import CustomInput from '../components/customInput/CustomInput';
import CustomButton from '../components/customButton/CustomButton';

const LoginModule = props => {
    const {
        signInRequest
    } = props

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const getInputValue = event => {
        const { name, value} = event.target;
        setUserData(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const onSignIn = event => {
        event.preventDefault();
        signInRequest(userData);
    }

    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.FormWrapper onSubmit={onSignIn}>
                    <CustomInput 
                        type='email'
                        name='username'
                        label='Login'
                        labelColor={theme.colorFont}
                        fontSize={25}
                        height={30}
                        width={80}
                        inputBackground={theme.colorFont}
                        handleChange={getInputValue}
                    />
                    <CustomInput 
                        type='password'
                        name='password'
                        label='Password'
                        labelColor={theme.colorFont}
                        fontSize={25}
                        height={30}
                        width={80}
                        inputBackground={theme.colorFont}  
                        handleChange={getInputValue} 
                    />
                    <CustomButton 
                        type='submit'
                        height={30}
                        text='Sing in'
                        handleEvent={onSignIn}
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(LoginModule);