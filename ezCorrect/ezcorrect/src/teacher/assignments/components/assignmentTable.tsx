import { Checkbox, createStyles, IconButton, lighten, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Theme, Toolbar, Tooltip, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { IAssignmentMetaData } from '../assignments.interfaces';
import { useDispatch } from 'react-redux';
import { deleteAssignments } from '../assignments.actions';

interface Data {
    datestamp: string;
    _id: string;
    questions: number;
    subject: string;
    title: string;
  }
  
  // function createData(
  //   name: string,
  //   calories: number,
  //   fat: number,
  //   carbs: number,
  //   protein: number,
  // ): Data {
  //   return { name, calories, fat, carbs, protein };
  // }
  
  // const rows = [
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Donut', 452, 25.0, 51, 4.9),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  //   createData('Honeycomb', 408, 3.2, 87, 6.5),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
  //   createData('KitKat', 518, 26.0, 65, 7.0),
  //   createData('Lollipop', 392, 0.2, 98, 0.0),
  //   createData('Marshmallow', 318, 0, 81, 2.0),
  //   createData('Nougat', 360, 19.0, 9, 37.0),
  //   createData('Oreo', 437, 18.0, 63, 4.0),
  // ];
  

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });

//   const StyledTableCell = withStyles((theme: Theme) =>
//   createStyles({
//     head: {
//       backgroundColor: '#A3A1D0',
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }),
// )(TableCell);
  
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
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  interface HeadCell {
    disablePadding: boolean;
    id: keyof IAssignmentMetaData;
    label: string;
    numeric: boolean;
  }

  interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

  const headCells: HeadCell[] = [
     //{ id: '_id', numeric: false, disablePadding: true, label: 'Id' },
    { id: 'title', numeric: false, disablePadding: false, label: 'Titel' },
    { id: 'subject', numeric: false, disablePadding: false, label: 'Ämne' },
    { id: 'questions', numeric: false, disablePadding: false, label: 'Frågor' },  
    { id: 'datestamp', numeric: false, disablePadding: false, label: 'Skapad' },
  ];

type Order = 'asc' | 'desc';

function EnhancedTableHead(props: EnhancedTableProps) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === headCell.id ? order : false}
            >
                <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                >
                {headCell.label}
                {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                ) : null}
                </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        highlight:
            theme.palette.type === 'light'
            ? {
                color: 'white',
                backgroundColor: '#A3A1D0',
                }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
                },
        title: {
            flex: '1 1 100%',
        },
        // head: {
        //     backgroundColor: '#A3A1D0',
        //     color: theme.palette.common.white,
        // },
        // body: {
        //     fontSize: 14,
        // },
    }),
);

interface EnhancedTableToolbarProps {
    numSelected: number;
    delete: () => void;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
const classes = useToolbarStyles();
const { numSelected } = props;

    return (
        <Toolbar
        className={classes.highlight}
        >
        {numSelected > 0 ? (
            <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
            </Typography>
        ) : (
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                Uppgifter
            </Typography>
        )}
            <Tooltip title="Förhandsgranska">
                <IconButton aria-label="preview">
                    <FindInPageIcon style={{color:'white'}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Redigera">
                <IconButton aria-label="edit">
                    <CreateIcon style={{color:'white'}}/>
                </IconButton>
            </Tooltip>           
            <Tooltip title="Ta bort">
                <IconButton aria-label="delete" onClick={props.delete}>
                    <DeleteIcon style={{color:'white'}}/>
                </IconButton>
            </Tooltip>        
        </Toolbar>
    );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: lighten('#A3A1D0', 0.85),
      },
    },
  }),
)(TableRow);

interface AssignmentTableProps{
  data: IAssignmentMetaData[]
}
const AssignmentTable:React.FC<AssignmentTableProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('title');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = props.data.map((n) => n._id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    }; 

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {

        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleRemoveItem = () => {
        console.log(selected);
        dispatch(deleteAssignments(selected))
        setSelected([]);
    }

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);

    return(
        <div style={{padding:20, paddingTop:20}}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <EnhancedTableToolbar numSelected={selected.length} delete={handleRemoveItem}/>
                        <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={props.data.length}
                            />
                            <TableBody>
                            {stableSort(props.data, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                const isItemSelected = isSelected(row._id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <StyledTableRow
                                    hover
                                    onClick={(event) => handleClick(event, row._id)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row._id}
                                    selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                            checked={isItemSelected}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        {/* <TableCell component="th" id={labelId} scope="row" padding="none">
                                            {row.id}
                                        </TableCell> */}
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.questions}</TableCell>                                       
                                        <TableCell>{row.datestamp}</TableCell>
                                    </StyledTableRow>
                                );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                                </TableRow>
                            )}
                            </TableBody>
                        </Table>
                        </TableContainer>
                        <TablePagination
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={props.data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
        </div>
    )
}

export default AssignmentTable;