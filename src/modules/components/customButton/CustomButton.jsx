import React from 'react';
import { Button } from './styledComponents.js';
import PropTypes from 'prop-types';
import theme from '../../themes/colors.js';

const CustomButton = props => {
    const {
        text,
        width,
        height,
        fontSize,
        buttonBackground,
        buttonBackgroundHover,
        buttonBackgroundActive
    } = props;

    return(
        <Button width={width}
                height={height}
                fontSize={fontSize}
                buttonBackground={buttonBackground}
                buttonBackgroundHover={buttonBackgroundHover}
                buttonBackgroundActive={buttonBackgroundActive}
        >
            {text}
        </Button>
    )
}

CustomButton.propTypes = {
    text: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
    buttonBackground: PropTypes.string,
    buttonBackgroundHover: PropTypes.string,
    buttonBackgroundActive: PropTypes.string,
}

CustomButton.defaultProps = {
    text: 'button',
    width: 100,
    height: 20,
    fontSize: 18,
    buttonBackground: theme.buttonBackground,
    buttonBackgroundHover: theme.buttonBackgroundHover,
    buttonBackgroundActive: theme.buttonBackgroundActive
}

export default React.memo(CustomButton);