import React, { useMemo } from 'react';
import constants from '../../constants/index';
import { getModalStyles } from './logic';
import EditTaskModal from './components/EditTaskModal.jsx';

const Modals = props => {
    const {
        modals,
        closeModalWindow
    } = props;

    const styles = useMemo(() => getModalStyles(), [getModalStyles]);
    const editTaskModalData = modals[constants.EDIT_TASK_MODAL_WINDOW_TYPE];

    const modalStyles = {
        content: {
            ...styles.content,
            minWidth: 500,
            minHeight: 300,
        },
        overlay: {
            ...styles.overlay,
            background: 'rgba(0,0,0,0.5)',
        }
    }

    return (
        <EditTaskModal
            styles={modalStyles}
            modalData={editTaskModalData}
            closeModalWindow={closeModalWindow}
        />
    );
}

export default React.memo(Modals);