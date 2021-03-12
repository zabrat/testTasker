import styled from 'styled-components';

export const Button = styled.button`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    font-size: ${props => props.fontSize}px;
    background: ${props => props.buttonBackground};
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background: ${props => props.buttonBackgroundHover};
    }
    :active{
        background: ${props => props.buttonBackgroundActive};
    }
`;
