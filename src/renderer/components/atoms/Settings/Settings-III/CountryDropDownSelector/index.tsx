import { Autocomplete, Box, TextField } from "@mui/material";
import DropDownIcon from "./DropDownIcon";
import { countries } from "../../../../../../const/index";
import styled from "@emotion/styled";
type Props = {};

const CustomAutocomplete = styled(Autocomplete)({
  "& .MuiAutocomplete-root": {
    maxHeight: "32px",
    padding: "0px !important",
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: "red",
  },
  "& .MuiAutocomplete-popupIndicatorOpen": {
    color: "green",
  },
  "& .MuiAutocomplete-listbox": {
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "58px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: "6px",
    },
  },
});
export const CountryDropDownSelector = () => {
  return (
    <CustomAutocomplete
      id="country-select-demo"
      sx={{ width: 230, height: 32, padding: "0px" }}
      options={countries}
      popupIcon={<DropDownIcon />}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ background: "#0F141F", color: "#8C8C8C" }}
          {...props}
        >
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};
