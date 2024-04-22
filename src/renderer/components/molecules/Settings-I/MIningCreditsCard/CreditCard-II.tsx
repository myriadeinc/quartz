import { Box } from "@mui/material";
import { TextElement } from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/TextElement";
import MoneroIcon from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/MoneroIcon";
type Props = {};

export const CreditCardI = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F141F",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <MoneroIcon rectangleColor="0F141F" pathColor="#EAEAEA" />
      <TextElement />
    </Box>
  );
};
