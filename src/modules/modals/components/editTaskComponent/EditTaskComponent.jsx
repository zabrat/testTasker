import React, { useCallback } from 'react';
import constants from '../../../../constants'
import { MainWrapper } from './styledComponents';
import CustomInput from '../../../components/customInput/CustomInput';
import CustomButton from '../../../components/customButton/CustomButton';

const EditTaskComponent = props => {
    const {
        isShow,
        closeModalWindow,
    } = props

    const onClose = useCallback(() => {
        closeModalWindow({
            type: constants.EDIT_TASK_MODAL_WINDOW_TYPE,
        });
    }, [isShow]);

    return (
        <MainWrapper data-at='wrapper'>
            <MainWrapper.exitBtn 
                data-at='wrapper_exitBtn'
                children='X'
                onClick={onClose}
            />
            <CustomInput/>
            <CustomInput type='checkbox'/>
            <CustomButton text='Save'/>

        </MainWrapper>
    )
}

export default React.memo(EditTaskComponent);

