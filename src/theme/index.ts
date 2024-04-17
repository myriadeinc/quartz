import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EC5506",
    },
    secondary: {
      main: "#3760E0",
    },
    text: {
      primary: "#101F45",
      secondary: "696969",
    },
    error: {
      main: "#D50823",
    },
    warning: {
      main: "#806619",
    },
    background: {
      default: "#E9EBF0",
      paper: "#F2F3F5",
    },
    action: {
      hover: "#F0F0F0",
    },
    divider: "#D9D9D9",
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0E1B38",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#4252FF",
          "&:active": {
            // color: "#E8EAFF",
            backgroundColor: "#E8EAFF",
          },
        },
      },
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FA6F15",
    },
    secondary: {
      main: "#4D79FF",
    },
    text: {
      primary: "#EAEAEA",
      secondary: "#8C8C8C",
    },
    error: {
      main: "#FE1C3B",
    },
    warning: {
      main: "#FFCC33",
    },
    background: {
      default: "#080A0F",
      paper: "#0F141F",
    },
    action: {
      hover: "#FF8B40",
    },
    divider: "#D9D9D9",
    // highlight: "#FFC107",
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0E1B38",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#6C81F5",
          "&:active": {
            backgroundColor: "#1B2140",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-colorWarning": {
            "::selection": {
              backgroundColor: "#FFCC00", // Highlight color for text selection of warning
            },
          },
        },
      },
    },
  },
});
export default theme;
