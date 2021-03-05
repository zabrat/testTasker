import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    height: 80%;
    box-shadow: ${props => props.theme.mainBoxShadow};
    border-radius: 25px;
    background: white;
    padding: 10px;
    box-sizing: border-box;
`;
