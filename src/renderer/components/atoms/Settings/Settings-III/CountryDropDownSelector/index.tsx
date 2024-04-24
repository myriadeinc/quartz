import { Autocomplete, TextField } from "@mui/material";
import DropDownIcon from "./DropDownIcon";
type Props = {};

export const CountryDropDownSelector = () => {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ maxWidth: "230px", maxHeight: "289px", overflow: "auto" }}
      options={countries}
      autoHighlight
      popupIcon={<DropDownIcon />}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            maxWidth: "192px",
            lineHeight: "20px",
            padding: "6px 29px 6px 7px",
            color: "#8C8C8C",
            backgroundColor: "#0F141F",
            fontSize: "14px",
            "&:hover": {
              color: "#EAEAEA",
              backgroundColor: "#141A29",
            },
            "& .MuiAutocomplete-popupIndicator": {
              color: "#FA6F15",
            },
            "& .MuiAutocomplete-listbox::-webkit-scrollbar": {
              width: "4px",
            },
            "& .MuiAutocomplete-listbox::-webkit-scrollbar-thumb": {
              backgroundColor: "#414E66",
              borderRadius: "3px",
            },
          }}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};
