import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityOn from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOn";
import VisibilityOff from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOff";
import IconButton from "@mui/material/IconButton";

function createData(
  date: string,
  type: string,
  amount: string,
  delivery: string,
  code: string
) {
  return { date, type, amount, delivery, code };
}

const rows = [
  createData(
    "April 27, 2021 9:43 PM",
    "Steam",
    "$5",
    "Email",
    "•••••••••••••••"
  ),
  createData(
    "April 28, 2021 10:15 AM",
    "Amazon",
    "$10",
    "SMS",
    "•••••••••••••••"
  ),
  createData(
    "April 29, 2021 1:30 PM",
    "Google Play",
    "$20",
    "Email",
    "•••••••••••••••"
  ),
  createData(
    "April 30, 2021 3:20 PM",
    "iTunes",
    "$15",
    "SMS",
    "•••••••••••••••"
  ),
  createData(
    "May 1, 2021 5:55 PM",
    "PlayStation",
    "$25",
    "Email",
    "•••••••••••••••"
  ),
];

export function GCHistory() {
  const [showVisibleIcon, setShowVisibleIcon] = useState<number | null>(null);
  const [isVisibleOn, setIsVisibleOff] = useState(false);

  const handleMouseEnter = (index: number) => {
    setShowVisibleIcon(index);
  };

  const handleMouseLeave = () => {
    setShowVisibleIcon(null);
  };

  const handleVisibleIconOnOff = () => {
    setIsVisibleOff(!isVisibleOn);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#141A29", borderRadius: "7px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{ color: "", width: "52px" }}>
          <TableRow sx={{ width: "52px", borderBottom: "1px solid 141A29" }}>
            <TableCell
              sx={{
                color: "#8C8C8C",
                paddingLeft: "20px",
                borderBottom: "1px solid #293040",
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Type
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Amount
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Delivery
            </TableCell>
            <TableCell
              sx={{ color: "#8C8C8C", borderBottom: "1px solid #293040" }}
              align="left"
            >
              Code
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.date}
              sx={{
                backgroundColor: index % 2 === 0 ? "#0f141f" : "#141a29",
                borderBottom: "1px solid transparent",
                borderLeft: "1px solid transparent",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: "#EAEAEA",
                  width: "320px",
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
                  borderBottom: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                }}
              >
                {row.delivery}
              </TableCell>
              <TableCell
                align="left"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  color: "#EAEAEA",
                  width: "385px",
                  borderBottom: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                }}
              >
                {row.code}
                {showVisibleIcon === index && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleVisibleIconOnOff()}
                  >
                    {isVisibleOn ? (
                      <VisibilityOn
                        rectangleColor={"#414E66"}
                        pathColor="#EAEAEA"
                      />
                    ) : (
                      <VisibilityOff
                        rectangleColor={"#414E66"}
                        pathColor="#EAEAEA"
                      />
                    )}
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
