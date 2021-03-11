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
        isLogged,
        sortHandle,
        onOpenModal,
        columnTitles,
    } = props;

    return(
        <ThemeProvider theme={theme}>
            <Table>
                <Table.TableHeader>
                    {columnTitles.map(title => (
                        <TableHeader.columnTitle 
                            key={title.id}  
                            name={title.name}  
                            children={title.text}
                            onClick={sortHandle}
                            id={title.id}
                        />
                    ))}
                </Table.TableHeader>
                <Rows>
                {rows.map(rowInfo => (
                    <Table.Row key={rowInfo.id} isLogged={isLogged} onClick={onOpenModal}>
                        <Row.rowInfo children={rowInfo.id}/>
                        <Row.rowInfo children={rowInfo.username}/>
                        <Row.rowInfo children={rowInfo.email}/>
                        <Row.rowInfo children={rowInfo.text}/>
                        <Row.rowInfo children={rowInfo.status}/>
                    </Table.Row> 
                ))}
                </Rows>
            </Table>
        </ThemeProvider>
    )
}

export default React.memo(CustomTable);