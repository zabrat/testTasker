import React, { useCallback } from 'react';
import Modal from 'react-modal'
import constants from '../../../constants'
import EditTaskComponent from './editTaskComponent/EditTaskComponent.jsx';

const EditTaskModal = props => {
    const {
        styles,
        isShow,
        closeModalWindow,
    } = props;

    const onClose = useCallback(() => {
        closeModalWindow({
            type: constants.EDIT_TASK_MODAL_WINDOW_TYPE,
        });
    }, [closeModalWindow]);

    return (
        <Modal
            style={styles}
            isOpen={isShow}
            children={
                <EditTaskComponent
                    isShow={isShow}
                    closeModalWindow={closeModalWindow}
                />
            }
            ariaHideApp={false}
            onRequestClose={onClose}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        />
    );
}

export default React.memo(EditTaskModal);