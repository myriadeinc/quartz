import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(range: string, tier: string, commission: string) {
  return { range, tier, commission };
}
const REFERELS_TABLE_HEADER = ["Friend's Level", "Tier", "Commission"];
const rows = [
  createData("1-22", "Wood", "0%"),
  createData("23-39", "Copper", "3%"),
  createData("40-49", "Bronze", "7%"),
  createData("50-74", "Silver", "10%"),
  createData("75-89", "Gold", "15%"),
  createData("90", "Platinum", "20%"),
  createData("100+", "Diamond", "25%"),
];

export function ReferelsTiersTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "0 7px 7px", overflowX: "auto" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{ color: "", width: "52px" }}>
          <TableRow
            sx={{ width: "52px", borderBottom: "1px solid transparent" }}
          >
            {REFERELS_TABLE_HEADER.map((element, index) => (
              <TableCell
                key={index}
                align="center"
                sx={{
                  color: "#8C8C8C",
                  paddingLeft: "20px",
                  borderBottom: "1px solid transparent",
                  fontSize: "16px",
                  background: "#0F141F",
                }}
              >
                {element}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.range}
              sx={{
                backgroundColor: index % 2 === 0 ? "#0f141f" : "#141a29",
                borderBottom: "1px solid transparent",
                fontSize: "14px",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{
                  color: "#EAEAEA",
                  minWidth: "150px",
                  paddingLeft: "20px",
                  border: "1px solid transparent",
                }}
              >
                {row.range}
              </TableCell>
              <TableCell
                // align="left"
                align="center"
                sx={{
                  color: "#EAEAEA",
                  minWidth: "150px",
                  paddingLeft: "20px",
                  border: "1px solid transparent",
                }}
              >
                {row.tier}
              </TableCell>
              <TableCell
                // align="left"
                align="center"
                sx={{
                  color: "#EAEAEA",
                  minWidth: "150px",
                  paddingLeft: "20px",
                  border: "1px solid transparent",
                }}
              >
                {row.commission}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
