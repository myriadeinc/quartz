import { Box } from "@mui/material";
import { TextElement } from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/TextElement";
import MoneroIcon from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/MoneroIcon";
type CreditCardIIProps = {
  info: number;
};

export const CreditCardII = ({ info }: CreditCardIIProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F141F",
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        width: "72%",
      }}
    >
      <MoneroIcon rectangleColor="0F141F" pathColor="#EAEAEA" />
      <TextElement info={info} label="Monero Balance" />
    </Box>
  );
};
