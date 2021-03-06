import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CarTable = props => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align='left'>Color</TableCell>
                    <TableCell align='right'>Year</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { props.data.map((car, index) => (
                    <TableRow key={ index }>
                        <TableCell>{ car.brand }</TableCell>
                        <TableCell align='left'>{ car.color }</TableCell>
                        <TableCell align='right'>{ car.model }</TableCell>
                    </TableRow>
                )) }
            </TableBody>
        </Table>
    )
}

export default CarTable;