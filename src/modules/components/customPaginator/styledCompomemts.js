import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`;

export const PagesWrapper = styled.span`

`;

PagesWrapper.pageNumber = styled.button`
    cursor: pointer;
    font-size: 1rem;
    margin: 0.2rem;
`;

Wrapper.PagesWrapper = PagesWrapper;