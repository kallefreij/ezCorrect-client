import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import React, { FC } from 'react';
import { tableData } from './tableBody';

type Order = 'asc' | 'desc';

interface IAssignmentTableHeader {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof tableData) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof tableData;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Uppgift',
  },
  {
    id: 'startDate',
    numeric: false,
    disablePadding: false,
    label: 'StartDatum',
  },
  {
    id: 'dueDate',
    numeric: false,
    disablePadding: false,
    label: 'Sista inlämningsdatum',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

const AssignmentTableHeader: FC<IAssignmentTableHeader> = (props) => {
  const { order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof tableData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, i) => (
          <TableCell
            key={headCell.id}
            align={i === 0 ? 'left' : 'right'}
            sortDirection={props.orderBy === headCell.id ? props.order : false}
          >
            <TableSortLabel
              active={props.orderBy === headCell.id}
              direction={props.orderBy === headCell.id ? props.order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default AssignmentTableHeader;
