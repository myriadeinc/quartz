import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
interface breadcumbs {
  PathLink: string;
  notActiveTitle: string;
  activeTittle: string;
}
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export function BasicBreadcrumbs({
  PathLink,
  notActiveTitle,
  activeTittle,
}: breadcumbs) {
  return (
    <Box role="presentation" onClick={handleClick} sx={{ maxWidth: "334px" }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ gap: "8px" }}>
        <Link underline="none" color="inherit" href={PathLink}>
          {notActiveTitle}
        </Link>
        <Link underline="none" color="inherit" href="">
          {activeTittle}
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
