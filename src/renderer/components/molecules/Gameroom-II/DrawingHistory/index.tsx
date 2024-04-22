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

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export function DrawingHistory() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#141A29", borderRadius: "7px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead sx={{ color: "", width: "52px" }}>
          <TableRow sx={{ width: "52px", borderBottom: "1px solid 141A29" }}>
            <TableCell
              sx={{
                color: "#8C8C8C",
                paddingLeft: "20px",
                borderBottom: "1px solid #293040",
              }}
            >
              Drawing Tittle
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Number of Tickets
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Prize Amount (XMR)
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Last Purchased
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Past Winner
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                backgroundColor: index % 2 === 0 ? "#293040" : "#141A29",
                borderBottom: "1px solid #293040",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: "#EAEAEA",
                  width: "320px",
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
