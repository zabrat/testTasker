import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.theme.mainBoxShadow};
    border-radius: 25px;
    background: white;
    box-sizing: border-box;
`;

Wrapper.FormWrapper = styled.form`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;