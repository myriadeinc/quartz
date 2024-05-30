import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import DropDownIcon from 'renderer/components/atoms/Settings/Settings-III/CountryDropDownSelector/DropDownIcon';

interface countryOptions{
    options:Array<Object>;
}
export default function FreeSoloCreateOptionDialog({options}:countryOptions) {
  const [value, setValue] = React.useState<any | null>(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    toggleOpen(false);
  };


  return (
      <Autocomplete
        value={value}
        sx={{ width: '100%', overflow: 'visible', background:'#141A29',borderRadius: '3px',
      border: '1px solid #414E66',color:'#EAEAEA', "& .MuiAutocomplete-popupIndicator": {
        color: "#FA6F15",
      },
      "& .MuiAutocomplete-listbox::-webkit-scrollbar": {
        width: "4px",
      },
      "& .MuiAutocomplete-listbox::-webkit-scrollbar-thumb": {
        backgroundColor: "#414E66",
        borderRadius: "3px",
      },fontSize:'14px',lineHeight:'20px'}}
      popupIcon={<DropDownIcon/>}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setTimeout(() => {
              toggleOpen(true);
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
          } else {
            setValue(newValue);
          }
        }}
        id="free-solo-dialog-demo"
        options={options}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props} style={{background:'#141A29',color:'#EAEAEA'}}>{option.title}</li>}
        freeSolo
        renderInput={(params) => <TextField {...params}  sx={{"& input:focus": {
          border: "1px solid transparent",
          color:'#EAEAEA',
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
        },}}/>}
      />
    }