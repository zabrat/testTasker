import React, { useState } from 'react';
import { Wrapper, ButtonWrapper } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import CustomInput from '../components/customInput/CustomInput';
import CustomButton from '../components/customButton/CustomButton';
import { Link } from 'react-router-dom';

const LoginModule = props => {
    const {
        isLogged,
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
        setUserData({
                username: '',
                password: ''
        })
    }

    return(
        <ThemeProvider theme={theme}>
            <ButtonWrapper>
                <Link to='/'>
                    <CustomButton
                        text='Sign in'
                        height={30}
                        />
                </Link>
            </ButtonWrapper>

            <Wrapper>
                <Wrapper.FormWrapper onSubmit={onSignIn}>
                    <CustomInput 
                        value={userData.username}
                        required={true}
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
                        required={true}
                        value={userData.password}
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
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(LoginModule);