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
interface drawHistoryProps {
  headerData: Array<string>;
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Caramel", 262, 16.0, 24, 6.0),
];

const HISTORY_DATA = [
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
const WITHDRAW_HEADERS = ["Date", "Type", "Amount", "Status", "Address"];
export function DrawingHistory() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#141A29", borderRadius: "0 7px 7px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{ color: "", width: "52px" }}>
          <TableRow sx={{ width: "52px", borderBottom: "1px solid 141A29" }}>
            {WITHDRAW_HEADERS.map((element, index) => {
              return (
                <TableCell
                  sx={{
                    color: "#8C8C8C",
                    paddingLeft: "20px",
                    borderBottom: "1px solid transparent",
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
          {HISTORY_DATA.map((row, index) => (
            <TableRow
              key={row.type}
              sx={{
                backgroundColor: index % 2 === 0 ? "#0f141f" : "#141a29",
                borderBottom: "1px solid transparent",
                borderLeft: "1px solid transparent",
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
                  borderBottom: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                }}
              >
                {row.date}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "256px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                }}
              >
                {row.type}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "256px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                }}
              >
                {row.amount}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "256px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                }}
              >
                {row.status}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#EAEAEA",
                  width: "385px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                }}
              >
                {row.address}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
