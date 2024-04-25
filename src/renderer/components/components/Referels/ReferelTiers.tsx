import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";
import { ReferelsTiersTable } from "./ReferelsTiersTable";
import { WoodLeftIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/WoodLeftIcon";
import { WoodRightICon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/WoodRightICon";
import CopperLeftIcon from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperLeftIcon";
import { CopperRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperRightIcon";
import { BronzeLeftIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/BronzeLeftIcon";
import { BronzeRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/BronzeRightIcon";
import { SilverLeftIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/SilverLeftIcon";
import { SilverRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/SilverRightIcon";
import { GoldernLeftIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/GoldernLeftIcon";
import { GoldrightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/GoldrightIcon";
import { PlatinumLeftIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/PlatinumLeftIcon";
import { PlatinumIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/PlatinumIconRight";
import { DiamondLeftIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/DiamondLeftIcon";
import { DiamondRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/DiamondRightIcon";

type Props = {};
const REFERELS_TABLE = [
  { name: "Wood", IconLeft: <WoodLeftIcon />, IconRight: <WoodRightICon /> },
  {
    name: "Copper",
    IconLeft: <CopperLeftIcon />,
    IconRight: <CopperRightIcon />,
  },
  {
    name: "Bronze",
    IconLeft: <BronzeLeftIcon />,
    IconRight: <BronzeRightIcon />,
  },
  {
    name: "Silver",
    IconLeft: <SilverLeftIcon />,
    IconRight: <SilverRightIcon />,
  },
  { name: "Gold", IconLeft: <GoldernLeftIcon />, IconRight: <GoldrightIcon /> },
  {
    name: "Platinum",
    IconLeft: <PlatinumLeftIcon />,
    IconRight: <PlatinumIcon />,
  },
  {
    name: "Wood",
    IconLeft: <DiamondLeftIcon />,
    IconRight: <DiamondRightIcon />,
  },
];
export const ReferelTiers = (props: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ paddingRight: "40px", paddingBottom: "20px" }}>
        <Typography color="#EAEAEA" variant="heading2">
          Referels Tiers
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <ReferelsTiersTable />
          <Box
            sx={{
              padding: "35px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {REFERELS_TABLE.map((element) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    padding: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30%",
                    marginBottom: "20px",
                  }}
                >
                  {element.IconLeft}
                  <Typography variant="caption" color="#8C8C8C">
                    {element.name}
                  </Typography>
                  {element.IconRight}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
