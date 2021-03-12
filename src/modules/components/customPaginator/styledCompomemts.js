import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`;

export const PagesWrapper = styled.span`

`;

PagesWrapper.pageNumber = styled.button`
    ${props => props.currentPage ?
    `
    background: #332359;
    color: white;`:
    null};
    cursor: pointer;
    font-size: 1rem;
    margin: 0.2rem;
    outline: none;
`;

Wrapper.PagesWrapper = PagesWrapper;