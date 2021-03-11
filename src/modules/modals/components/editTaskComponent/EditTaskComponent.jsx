import React, { useCallback } from 'react';
import constants from '../../../../constants'
import { MainWrapper } from './styledComponents';
import CustomInput from '../../../components/customInput/CustomInput';
import CustomButton from '../../../components/customButton/CustomButton';
import { ThemeProvider } from 'styled-components';
import theme from '../../../themes/colors';

const EditTaskComponent = props => {
    const {
        modalData,
        closeModalWindow,
    } = props

    const onClose = useCallback(() => {
        closeModalWindow({
            type: constants.EDIT_TASK_MODAL_WINDOW_TYPE,
        });
    }, [modalData.isShow]);

    return (
        <ThemeProvider theme={theme}>
            <MainWrapper data-at='wrapper'>
                <MainWrapper.exitBtn 
                    data-at='wrapper_exitBtn'
                    children='X'
                    onClick={onClose}
                    />
                <CustomInput 
                    value={modalData.data.taskText}
                    name='task-text'
                    label='Task text'
                    labelColor={theme.colorFont}
                    fontSize={25}
                    height={30}
                    width={80}
                    inputBackground={theme.colorFont}
                    // handleChange={getInputValue}
                    />
                <CustomInput 
                    type='checkbox'
                    label='Task status'
                    labelColor={theme.colorFont}
                    fontSize={25}
                />
                <CustomButton text='Save'/>
            </MainWrapper>
        </ThemeProvider>
    )
}

export default React.memo(EditTaskComponent);

