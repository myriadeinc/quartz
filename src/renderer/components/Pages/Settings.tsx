import { Box } from "@mui/material";
import Typography from "../atoms/TextStyles";
import { MiningSettings } from "../components/Settings-I/MiningSettings";
import { SecondaryButton } from "../atoms/Settings/Settings-II/SecondaryButton";
import { CountryDropDownSelector } from "../atoms/Settings/Settings-III/CountryDropDownSelector";
import { AddressVisibility } from "../molecules/Settings-II/AddressVisibility";
import { DarkLightModeSelector } from "../molecules/Settings-II/ModeSelector";
import { ToggleSwitchButton } from "../atoms/Settings/Settings-III/ToggleButton";
import { useState } from "react";
import { PasswordChangeForm } from "../components/Settings-I/PasswordChangeFileds";
const AVATAR_PATH = [
  { id: 1, src: "/assets/Illustrations/AvatarIcons/Bear.webp" },
  { id: 2, src: "/assets/Illustrations/AvatarIcons/Bird.webp" },
  { id: 3, src: "/assets/Illustrations/AvatarIcons/Bunny.webp" },
  { id: 4, src: "/assets/Illustrations/AvatarIcons/Cat.webp" },
  { id: 5, src: "/assets/Illustrations/AvatarIcons/Cheetah.webp" },
  {
    id: 6,
    src: "/assets/Illustrations/AvatarIcons/Cobra.webp",
  },
  {
    id: 7,
    src: "/assets/Illustrations/AvatarIcons/Cow.webp",
  },
  {
    id: 8,
    src: "/assets/Illustrations/AvatarIcons/Deer.webp",
  },
  {
    id: 9,
    src: "/assets/Illustrations/AvatarIcons/Dog.webp",
  },
  {
    id: 10,
    src: "/assets/Illustrations/AvatarIcons/Elephant.webp",
  },
  {
    id: 11,
    src: "/assets/Illustrations/AvatarIcons/Fox.webp",
  },
  { id: 12, src: "/assets/Illustrations/AvatarIcons/Frog.webp" },
  {
    id: 13,
    src: "/assets/Illustrations/AvatarIcons/Giraffe.webp",
  },
  { id: 14, src: "/assets/Illustrations/AvatarIcons/Gorilla.webp" },
  {
    id: 15,
    src: "/assets/Illustrations/AvatarIcons/Hornet.webp",
  },
  {
    id: 16,
    src: "/assets/Illustrations/AvatarIcons/Horse.webp",
  },
  {
    id: 16,
    src: "/assets/Illustrations/AvatarIcons/Impala.webp",
  },
  {
    id: 17,
    src: "/assets/Illustrations/AvatarIcons/Kangaroo.webp",
  },
  {
    id: 18,
    src: "/assets/Illustrations/AvatarIcons/Koala.webp",
  },
  {
    id: 19,
    src: "/assets/Illustrations/AvatarIcons/Lion.webp",
  },
  {
    id: 20,
    src: "/assets/Illustrations/AvatarIcons/Octupus.webp",
  },
  {
    id: 21,
    src: "/assets/Illustrations/AvatarIcons/Ostrich.webp",
  },
  {
    id: 22,
    src: "/assets/Illustrations/AvatarIcons/Pig.webp",
  },
  {
    id: 23,
    src: "/assets/Illustrations/AvatarIcons/Platypus.webp",
  },
  {
    id: 24,
    src: "/assets/Illustrations/AvatarIcons/Rabbit.webp",
  },
  {
    id: 25,
    src: "/assets/Illustrations/AvatarIcons/Raccoon.webp",
  },
  {
    id: 26,
    src: "/assets/Illustrations/AvatarIcons/Sheep.webp",
  },
  {
    id: 27,
    src: "/assets/Illustrations/AvatarIcons/Snowman.webp",
  },
  {
    id: 28,
    src: "/assets/Illustrations/AvatarIcons/Star.webp",
  },
  {
    id: 29,
    src: "/assets/Illustrations/AvatarIcons/Zeebra.webp",
  },
];
export const Settings = () => {
  const [isPasswordEdit, setPasswordEdit] = useState(false);
  const handleEditPassword = () => {
    setPasswordEdit(!isPasswordEdit);
  };
  return (
    <Box
      sx={{
        width: {
          xs: "100vw",
          sm: "100vw",
          md: "calc(100% - 406px)",
          lg: "calc(100% - 406px)",
        },
        marginLeft: "406px",
        padding: "1.5rem",
      }}
    >
      <Box sx={{ paddingBottom: "32px" }}>
        <Typography variant="heading1" color="#EAEAEA">
          Settings
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#0F141F",
          padding: "20px",
        }}
      >
        <Box sx={{ padding: "20px 0 20px" }}>
          <Typography variant="heading2" color="#EAEAEA">
            Profile Settings
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "#0F141F",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <Typography color="#EAEAEA" variant="body">
                  Change Username
                </Typography>
                <Box sx={{ width: "120px" }}>
                  <SecondaryButton text="Edit" width="100%" onClick={} />
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <Typography color="#EAEAEA" variant="body">
                  Country
                </Typography>
                <Box>
                  <CountryDropDownSelector />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "20px",
                }}
              >
                <Typography variant="bodySmall" color="#EAEAEA">
                  Change Default Monero Address
                </Typography>
                <AddressVisibility />
              </Box>
              <Box sx={{ width: "120px" }}>
                <SecondaryButton text="Edit" width="100%" />
              </Box>
            </Box>
            <Box
              sx={{
                background: "#0F141F",
                padding: "0 20px 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <Typography color="#EAEAEA" variant="body">
                  Change Password
                </Typography>
                {isPasswordEdit && <PasswordChangeForm />}
                <Box sx={{ width: "120px" }}>
                  <SecondaryButton
                    text={isPasswordEdit ? "Confirm" : "Edit"}
                    width="100%"
                    onClick={handleEditPassword}
                  />
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignSelf: "end",
                  }}
                >
                  <Typography variant="body" color="#EAEAEA">
                    2 factor Authentication
                  </Typography>
                  <ToggleSwitchButton />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                >
                  <Typography variant="body" color="#EAEAEA">
                    Color Mode
                  </Typography>
                  <DarkLightModeSelector />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography color="#EAEAEA" variant="body">
              Pick an Avatar
            </Typography>
            <Box
              sx={{
                maxHeight: "428px",
                width: "593px",
                overflow: "auto",
                background: "#080A0F",
                border: "1px solid #293040",
                borderRadius: "7px",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              {AVATAR_PATH.map((element) => {
                return (
                  <Box sx={{ width: "96px", height: "96px" }}>
                    <img
                      src={element.src}
                      alt={`img-${element.id}`}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    ;
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ marginTop: "32px", borderRadius: "7px", background: "#0F141F" }}
      >
        <MiningSettings />
      </Box>
    </Box>
  );
};
