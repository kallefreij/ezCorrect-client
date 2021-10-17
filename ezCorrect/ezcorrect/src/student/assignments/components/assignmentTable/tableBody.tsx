import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import dayjs from 'dayjs';
import CheckIcon from '@material-ui/icons/Check';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AssignmentTableHeader from './tableHeader';

import { Box, Chip, TableCell, TableSortLabel } from '@material-ui/core';
import Check from '@material-ui/icons/Check';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    boxShadow: 'none',
  },
});

interface IAssignmentCopyStudent {
  name: string;
  assignment?: string;
  answers?: string[];
  type?: string; // Typ av fil, för att avgöra om den ska sparas på någon annat sätt (film/bild/dokument osv)
  file?: Buffer; // Mongoose använde buffer för att spara ner BSON verkar det som.
  startDate: Date;
  dueDate: Date;
  status: string;
}

export interface tableData {
  name: string;
  startDate: Date;
  dueDate: Date;
  status: string;
}

function createData(name: string, startDate: string, dueDate: string, status: string) {
  return { name, startDate, dueDate, status };
}

const rows = [
  createData('Matteprov', dayjs(new Date()).format('YYYY-MM-DD HH:mm'), dayjs(new Date()).format('YYYY-MM-DD HH:mm'), 'ongoing'),
  createData('Engelska', dayjs(new Date()).format('YYYY-MM-DD HH:mm'), dayjs(new Date()).format('YYYY-MM-DD HH:mm'), 'late'),
  createData('Biologi', dayjs(new Date()).format('YYYY-MM-DD HH:mm'), dayjs(new Date()).format('YYYY-MM-DD HH:mm'), 'corrected'),
  createData('Annat', dayjs(new Date()).format('YYYY-MM-DD HH:mm'), dayjs(new Date()).format('YYYY-MM-DD HH:mm'), 'submitted'),
  createData('Matteprov2', dayjs(new Date()).format('YYYY-MM-DD HH:mm'), dayjs(new Date()).format('YYYY-MM-DD HH:mm'), 'coming'),
  createData('Matteprov3', dayjs(new Date()).format('YYYY-MM-DD HH:mm'), dayjs(new Date()).format('YYYY-MM-DD HH:mm'), 'coming'),
];

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

type Order = 'asc' | 'desc';

const AssignmentTableBody: FC = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof tableData>('name');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const classes = useStyles();

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof tableData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'ongoing':
        return <Chip label="Pågående" style={{ backgroundColor: '#FDE5DD', borderColor: '#FDE5DD', fontWeight: 'bolder' }} />;
      case 'coming':
        return <Chip label="Kommande" style={{ backgroundColor: '#FACEBF', borderColor: '#FACEBF', fontWeight: 'bolder' }} />;
      case 'corrected':
        return (
          <Chip
            icon={<Check style={{ color: 'white' }} />}
            label="Rättad"
            style={{ backgroundColor: '#FAA68A', borderColor: '#FAA68A', fontWeight: 'bolder', color: 'white' }}
          />
        );
      case 'submitted':
        return (
          <Chip
            icon={<SentimentVerySatisfiedIcon style={{ color: 'white' }} />}
            label="Inlämnad"
            style={{ backgroundColor: '#A1D0A5', borderColor: '#A1D0A5', fontWeight: 'bolder', color: 'white' }}
          />
        );
      case 'late':
        return (
          <Chip
            icon={<SentimentVeryDissatisfiedIcon style={{ color: 'white' }} />}
            label="Sen"
            style={{ backgroundColor: '#D08383', borderColor: '#D08383', fontWeight: 'bolder', color: 'white' }}
          />
        );
    }
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <AssignmentTableHeader
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
            const isItemSelected = isSelected(row.name);
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">{dayjs(row.startDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                <TableCell align="right">{dayjs(row.dueDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                <TableCell align="right">{getStatusChip(row.status)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignmentTableBody;
