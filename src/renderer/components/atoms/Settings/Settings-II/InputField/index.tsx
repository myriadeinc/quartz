import { TextField } from "@mui/material";
type Props = {};

export const InputField = (props: Props) => {
  return (
    <TextField
      variant="standard"
      id="outlined-basic"
      InputProps={{
        disableUnderline: true,
      }}
      style={{
        maxWidth: "230px",
        maxHeight: "32px",
        fontSize: "14px",
        lineHeight: "20px",
        boxSizing: "border-box",
      }}
      size="small"
      fullWidth
      placeholder="Input Field"
      sx={{
        border: "1px solid #414E66",
        borderRadius: "3px",
        padding: "6px 32px 6px 8px",
        "& input:focus": {
          borderBottom: "2px solid #FA6F15",
          outline: "none",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
          },
        },
        "&:focus": {
          outline: "none",
          border: "0",
        },
      }}
      //   onChange={onEmailChange}
    />
  );
};
