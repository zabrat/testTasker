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
        display,
        fontSize,
        labelColor,
        handleChange,
        inputBackground,
    } = props;

    return(
        <InputWrapper display={display}>
            {label && 
            <InputWrapper.label fontSize={fontSize} 
                                children={label}
                                labelColor={labelColor}
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
    display: PropTypes.string,
    fontSize: PropTypes.number,
    lavelColor: PropTypes.string,
    inputTitle: PropTypes.string,
    inputBackground: PropTypes.string,
}

CustomInput.defaultProps = {
    type: 'text',
    width: 40,
    height: 25,
    display: 'block',
    fontSize: 18,
    inputBackground: theme.infoBackground,
}

export default React.memo(CustomInput);