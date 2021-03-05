import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    width: 100%;
`;

InputWrapper.label = styled.p`
    margin: 0;
    width: 130px;
    font-size: ${props => props.fontSize}px;
`;

InputWrapper.input = styled.input`
    height: ${props => props.height}px;
    width: ${props => props.width}%;
    font-size: ${props => props.fontSize}px;
    background: ${props => props.inputBackground};
    outline: none;
    border: none;
    border-radius: 10px;
`;
