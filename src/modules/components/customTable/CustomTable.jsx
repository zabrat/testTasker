import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../themes/colors.js';
import {
    Row,
    Rows,
    Table,
    TableHeader,
} from './styledComponents.js'

const CustomTable = props => {
    const {
        rows,
        columnTitles,
    } = props;

    return(
        <ThemeProvider theme={theme}>
            <Table>
                <Table.TableHeader>
                    {columnTitles.map((text, index) => (
                        <TableHeader.columnTitle 
                            key={index}    
                            children={text}
                        />
                    ))}
                </Table.TableHeader>
                <Rows>
                {rows.map(rowInfo => (
                    <Table.Row key={rowInfo.id}>
                        { rowInfo.username && <Row.rowInfo children={rowInfo.username}/> }
                        { rowInfo.email && <Row.rowInfo children={rowInfo.email}/> }
                        { rowInfo.text && <Row.rowInfo children={rowInfo.text}/> }
                        { rowInfo.status && <Row.rowInfo children={rowInfo.status}/> }
                    </Table.Row> 
                ))}
                </Rows>
            </Table>
        </ThemeProvider>
    )
}

export default React.memo(CustomTable);