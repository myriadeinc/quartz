import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import visuallyHidden from "@mui/utils/visuallyHidden";
import Typography from "@mui/material/Typography";
import { IHistory } from "renderer/interfaces/pages/dashboard";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof IHistory;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Drawing Title",
  },
  {
    id: "tickets",
    numeric: true,
    disablePadding: false,
    label: "Number of Tickets",
  },
  {
    id: "amount",
    numeric: true,
    disablePadding: false,
    label: "Prize Amount (XMR)",
  },
  {
    id: "purchased",
    numeric: true,
    disablePadding: false,
    label: "Last Purchased",
  },
  {
    id: "winner",
    numeric: false,
    disablePadding: false,
    label: "Past Winner",
  },
];

interface EnhancedTableHeadProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IHistory
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableHeadProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IHistory) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              color: "#8C8C8C",
              padding: "12px 20px",
              borderBottom: "1px solid #293040",
              fontSize: "16px",
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box
                  component="span"
                  sx={{
                    ...(visuallyHidden || {}),
                    color: "#8C8C8C",
                  }}
                >
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableProps {
  data: IHistory[];
}

export const EnhancedTable = (props: EnhancedTableProps) => {
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof IHistory>("purchased");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows = props.data;
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IHistory
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, backgroundColor: "#141A29" }}>
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "#141A29", borderRadius: "0 7px 7px" }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              onSelectAllClick={function (
                event: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            {rows.length > 0 ? (
              <TableBody sx={{ scrollbarWidth: "4px" }}>
                {rows
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.title as string);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) =>
                          handleClick(event, row.title as string)
                        }
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.title}
                        selected={isItemSelected}
                        sx={{
                          backgroundColor:
                            index % 2 === 0 ? "#0f141f" : "#141a29",
                          borderBottom: "1px solid transparent",
                          fontSize: "14px",
                          padding: "12px 20px",
                        }}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          sx={{
                            color: "#EAEAEA",
                            width: "320px",
                            padding: "12px 20px",
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          {row.title}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: "#EAEAEA",
                            width: "320px",
                            padding: "12px 20px",
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          {row.tickets}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: "#EAEAEA",
                            width: "320px",
                            padding: "12px 20px",
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          {row.amount}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: "#EAEAEA",
                            width: "320px",
                            padding: "12px 20px",
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          {row.purchased}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            color: "#EAEAEA",
                            width: "320px",
                            padding: "12px 20px",
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          {row.winner}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow
                  sx={{
                    backgroundColor: "#0f141f",
                    borderBottom: "1px solid transparent",
                    fontSize: "14px",
                  }}
                >
                  <TableCell colSpan={headCells.length} align="center">
                    <Typography variant="h3" color="textSecondary">
                      No data found
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
