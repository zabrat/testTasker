import styled from 'styled-components';

export const Table = styled.div`
    height: 90%;
    margin: 10px;
`;

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px 0px;
    border-bottom: 1px solid black;
`;

TableHeader.columnTitle = styled.p`
    width: 20%;
    text-align: center;
    margin: 0;
    font-size: 20px;
`;

export const Rows = styled.div`
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar{
        position: fixed;
    }
`;

export const Row = styled.div`
    background: ${props => props.theme.infoBackground};
    display: flex;
    justify-content: space-around;
    padding: 5px 0px;
    margin: 5px 0px;
    border-radius: 10px;
`;

Row.rowInfo = styled.p`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

Table.TableHeader = TableHeader;
Table.Row = Row;