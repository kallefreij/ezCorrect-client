import {
    Checkbox,
    createStyles,
    IconButton,
    lighten,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Theme,
    Toolbar,
    Tooltip,
    Typography,
    withStyles,
  } from '@material-ui/core';
  import * as React from 'react';
  import DeleteIcon from '@material-ui/icons/Delete';
  import CreateIcon from '@material-ui/icons/Create';
  import PlanTestIcon from '@material-ui/icons/AccessTime';
  import { IAssignmentMetaData, IScheduledAssignment} from '../assignments.interfaces';
  import { useDispatch } from 'react-redux';
  import { deleteAssignments, getAssignment, setSelectedAssignment } from '../assignments.actions';
  import PlanAssignmentModal from './planAssignmentModal';
  import { useHistory } from 'react-router-dom';
  import { showSnackbarError } from '../../../common/ezSnackbar/snackbar.actions';
  import dayjs from 'dayjs';
  
  interface Data {
    _id: string;
    creator: string,
    title: string,
    assignmentId: string
    assignedTo: string,
    startTime: Date,
    endTime: Date,
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
  ): (a: { [key in Key]: number | string | Date}, b: { [key in Key]: number | string | Date }) => number {
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
    id: keyof IScheduledAssignment;
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
    { id: 'title', numeric: false, disablePadding: false, label: 'Titel' },
    { id: 'startTime', numeric: false, disablePadding: false, label: 'Börjar' },
    { id: 'endTime', numeric: false, disablePadding: false, label: 'Slutar' },
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
    })
  );
  
  interface EnhancedTableToolbarProps {
    numSelected: number;
    delete: () => void;
    planAssignment: () => void;
    edit: () => void;
  }
  
  const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar className={classes.highlight}>
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Schemlagda uppgifter
          </Typography>
        )}
        {/* <Tooltip title="Förhandsgranska">
                  <IconButton aria-label="preview">
                      <FindInPageIcon style={{color:'white'}}/>
                  </IconButton>
              </Tooltip> */}
        {/* <Tooltip title="Planera">
          <IconButton aria-label="plan" onClick={props.planAssignment}>
            <PlanTestIcon style={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redigera">
          <IconButton aria-label="edit" onClick={props.edit}>
            <CreateIcon style={{ color: 'white' }} />
          </IconButton>
        </Tooltip> */}
        <Tooltip title="Ta bort">
          <IconButton aria-label="delete" onClick={props.delete}>
            <DeleteIcon style={{ color: 'white' }} />
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
    })
  );
  
  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: lighten('#A3A1D0', 0.85),
        },
      },
    })
  )(TableRow);
  
  interface AssignmentTableProps {
    data: IScheduledAssignment[];
    hidden: boolean;
  }
  const ScheduledAssignmentTable: React.FC<AssignmentTableProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('startTime');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [planAssignmentOpen, setPlanAssignmentOpen] = React.useState(false);
  
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
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
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
      dispatch(deleteAssignments(selected));
      setSelected([]);
    };
  
    const handleEditAssignmentButtonClick = () => {
      console.log(selected);
      if (selected.length > 1) {
        dispatch(showSnackbarError('Du kan bara redigera ett prov åt gången'));
      } else if (selected.length === 1) {
        dispatch(getAssignment(selected[0]));
        history.push('/teacher/assignments/create');
      } else {
        dispatch(showSnackbarError('Välj ett prov att redigera'));
      }
    };
  
    const handleClickPlanAssignment = () => {
      console.log(selected);
      if (selected.length > 1) {
        dispatch(showSnackbarError('Du kan bara schemalägga ett prov åt gången'));
      } else if (selected.length === 1) {
        dispatch(setSelectedAssignment(selected[0]));
        planAssignmentOpen === true ? setPlanAssignmentOpen(false) : setPlanAssignmentOpen(true);
      } else {
        dispatch(showSnackbarError('Välj ett prov att schemalägga'));
      }
    };
  
    const isSelected = (name: string) => selected.indexOf(name) !== -1;
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);
  
    return (
      <div>
        <div className={classes.root}>
          <Paper className={classes.paper} hidden={props.hidden}>
            <EnhancedTableToolbar
              numSelected={selected.length}
              delete={handleRemoveItem}
              planAssignment={handleClickPlanAssignment}
              edit={handleEditAssignmentButtonClick}
            />
            <TableContainer>
              <Table className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
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
                            <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                          </TableCell>
                          <TableCell>{row.title}</TableCell>
                          {/* <TableCell>{dayjs(row.startTime).format('YYYY-MM-DD HH:mm') + ' - ' + dayjs(row.endTime).format('HH:mm')}</TableCell> */}
                          {/* <TableCell>{dayjs(row.endTime).format('YYYY-MM-DD')}<div style={{fontWeight:'bold'}}>{dayjs(row.startTime).format('HH:mm')+ ' - ' + dayjs(row.endTime).format('HH:mm')}</div></TableCell> */}
                          <TableCell>{dayjs(row.startTime).format('YYYY-MM-DD HH:mm')}</TableCell>
                          <TableCell>{dayjs(row.endTime).format('YYYY-MM-DD HH:mm')}</TableCell>                   
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
        <PlanAssignmentModal handleClose={handleClickPlanAssignment} open={planAssignmentOpen} />
      </div>
    );
  };
  
  export default ScheduledAssignmentTable;
  