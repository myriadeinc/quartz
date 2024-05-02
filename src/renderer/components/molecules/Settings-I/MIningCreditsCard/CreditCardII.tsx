import { Box } from "@mui/material";
import { TextElement } from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/TextElement";
import MoneroIcon from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/MoneroIcon";
type CreditCardIIProps = {
  info: number;
};
const DEFAULT_USD = 0.0;
export const CreditCardII = ({ info }: CreditCardIIProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F141F",
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        width: "100%",
      }}
    >
      <MoneroIcon rectangleColor="0F141F" pathColor="#EAEAEA" />
      <TextElement
        info={`${info} ($${(DEFAULT_USD * info).toFixed(2)} USD)`}
        label="Monero Balance"
      />
    </Box>
  );
};
