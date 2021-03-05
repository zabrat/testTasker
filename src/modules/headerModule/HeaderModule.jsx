import React from 'react';
import { Wrapper } from './styledComponents';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import CustomInput from '../components/customInput/CustomInput';
import CustomButton from '../components/customButton/CustomButton';

const HeaderModule = () => {
    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.FormWrapper>
                    <CustomInput
                        width={80}
                        />
                    <CustomButton
                        height={30}
                        text={'Add task'}
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(HeaderModule);