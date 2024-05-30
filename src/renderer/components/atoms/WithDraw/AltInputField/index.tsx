import { TextField } from "@mui/material";
type Props = {};

export const AltIconInputField = (props: Props) => {
  return (
    <TextField
      variant="standard"
      id="outlined-basic"
      InputProps={{
        disableUnderline: true,
      }}
      style={{
        maxWidth: "220px",
        maxHeight: "32px",
        fontSize: "14px",
        lineHeight: "24px",
        color: "#EAEAEA",
      }}
      inputProps={{
        style: {
          padding: "6px 32px 6px 8px",
          color: "#EAEAEA",
        },
      }}
      size="small"
      fullWidth
      placeholder="Email"
      sx={{
        mt: "20px",
        border: "1px solid #414E66",
        borderRadius: "3px",
        color: "#EAEAEA",
        backgroundColor: "#141A29",
        "& input:focus": {
          borderBottom: "2px solid #FA6F15",
          outline: "none",
          backgroundColor: "#141A29",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
            "&:hover": {
              backgroundColor: "red",
            },
          },
        },
        "&:focus": {
          outline: "none",
          border: "0",
        },
      }}
      // onChange={onEmailChange}
    />
  );
};
