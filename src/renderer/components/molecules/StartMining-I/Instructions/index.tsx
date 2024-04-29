import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { ReactElement } from "react";
import Typography from "renderer/components/atoms/TextStyles";

type InstructionProps = {
  instructions: string;
  InstructionIcon: ReactElement;
};
const useStyles = makeStyles({
  itemsBorderBottom: {
    "&:nth-last-child(1)": {
      borderRight: "none",
    },
  },
});
export const Instructions = ({
  instructions,
  InstructionIcon,
}: InstructionProps) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderRight: {
          xs: "1px solid rgba(234, 234, 234, 0.2)",
          sm: "none",
          md: "none",
          lg: "1px solid #293040",
          xl: "1px solid #293040",
        },
        borderBottom: {
          sm: "1px solid rgba(234, 234, 234, 0.2)",
          md: "1px solid rgba(234, 234, 234, 0.2)",
          lg: "none",
          xl: "none",
        },
        width: "90%",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        placeContent: "center",
      }}
      className={classes.itemsBorderBottom}
      maxWidth="270px"
      margin="26px 49px"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "270px",
          alignItems: "center",
        }}
      >
        <InstructionIcon />
        <Typography variant="bodySmall" color="#EAEAEA" centered>
          {instructions}
        </Typography>
      </Box>
    </Box>
  );
};
