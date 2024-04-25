import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}
const TABLE_HEADER = [
  "Drawing Titles",
  "Number of Tickets",
  "Prize Amount (XMR)",
  "Last Purchased",
  "Past Winner",
];
interface drawHistoryProps {
  headerData: Array<string>;
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Caramel", 262, 16.0, 24, 6.0),
];

const dataForHistory = [
  {
    date: "June 16, 2021 3:59 PM",
    type: "XMR",
    amount: "0.002863292873",
    status: "Pending",
    address: "antoineshousha@gmail.com",
  },
  {
    date: "July 5, 2021 9:22 AM",
    type: "BTC",
    amount: "0.00528947126",
    status: "Contact Support",
    address: "johndoe@example.com",
  },
  {
    date: "August 10, 2021 12:15 PM",
    type: "ETH",
    amount: "1.203504871",
    status: "Completed",
    address: "janedoe@example.com",
  },
];
export function DrawingHistory({ headerData }: drawHistoryProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#141A29", borderRadius: "0 7px 7px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{ color: "", width: "52px" }}>
          <TableRow sx={{ width: "52px", borderBottom: "1px solid 141A29" }}>
            {headerData.map((element, index) => {
              return (
                <TableCell
                  sx={{
                    color: "#8C8C8C",
                    paddingLeft: "20px",
                    borderBottom: "1px solid #293040",
                    fontSize: "16px",
                  }}
                >
                  {element}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                backgroundColor: index % 2 === 0 ? "#0f141f" : "#141a29",
                borderBottom: "1px solid #293040",
                fontSize: "14px",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: "#EAEAEA",
                  width: "320px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid #293040",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "256px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid #293040",
                }}
              >
                {row.calories}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "256px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid #293040",
                }}
              >
                {row.fat}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "256px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid #293040",
                }}
              >
                {row.carbs}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "385px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid #293040",
                }}
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
