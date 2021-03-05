import React from 'react';
import { InputWrapper } from './styledComponents.js';
import PropTypes from 'prop-types';
import theme from '../../themes/colors.js'

const CustomInput = props => {
    const {
        type,
        name,
        label,
        width,
        height,
        fontSize,
        handleChange,
        inputBackground,
    } = props;

    return(
        <InputWrapper>
            {label && 
            <InputWrapper.label fontSize={fontSize} 
                                children={label}
            />}
            <InputWrapper.input 
                type={type}
                name={name}
                width={width}
                height={height}
                fontSize={fontSize}
                onChange={handleChange}
                inputBackground={inputBackground}
            />
        </InputWrapper>
    )
}

CustomInput.propTypes = {
    type: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
    inputTitle: PropTypes.string,
    inputBackground: PropTypes.string,
}

CustomInput.defaultProps = {
    type: 'text',
    width: 40,
    height: 25,
    fontSize: 18,
    inputBackground: theme.infoBackground,
}

export default React.memo(CustomInput);