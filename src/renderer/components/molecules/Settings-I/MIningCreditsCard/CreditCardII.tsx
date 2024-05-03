import { Box } from "@mui/material";
import { TextElement } from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/TextElement";
import MoneroIcon from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/MoneroIcon";
import { useEffect, useState } from "react";
import { FetchCurrentMoneroUSDRate } from "services/api.service";
type CreditCardIIProps = {
  info: number;
};
export const CreditCardII = ({ info }: CreditCardIIProps) => {
  const [currenUSDRateForMonero, setCurrentUSDRateForMonero] = useState(0.0);
  useEffect(() => {
    const fetchCurrentMoneroUSDRate = async () => {
      try {
        const currentMoneroUSDRate = await FetchCurrentMoneroUSDRate();
        if (currentMoneroUSDRate) {
          setCurrentUSDRateForMonero(currentMoneroUSDRate.USD);
        }
      } catch (error) {
        console.error("Error fetching active events data:", error);
      }
    };
    fetchCurrentMoneroUSDRate();
  }, []);
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
        info={`${info} ($${(currenUSDRateForMonero * info).toFixed(2)} USD)`}
        label="Monero Balance"
      />
    </Box>
  );
};
