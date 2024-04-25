import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "renderer/components/atoms/TextStyles";
import { IconButton, TextField } from "@mui/material";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";
// import { SecondaryButton } from "renderer/components/atoms/Settings/Settings-II/SecondaryButton";
import { CancelButtonIcon } from "renderer/components/atoms/StartMining-I/CancelButton";
interface AddWorkerModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "7px",
  width: 540,
  minHeight: 200,
  bgcolor: "#0F141F",
  border: "1px solid #414E66",
  boxShadow: 24,
  p: 3,
};

export function AddWorkerModal({ open, setOpen }: AddWorkerModalProps) {
  const [isFriendRequestSend, setFriendRequestSend] = React.useState(false);
  const [userName, setUsername] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUserEmailNameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        sx={{ bordeRadius: "3px" }}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="heading2" color="#EAEAEA">
                Add a Worker
              </Typography>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClose}
                edge="end"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  right: 0,
                }}
              >
                <CancelButtonIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "8px",
                flexDirection: "column",
                paddingTop: "20px",
              }}
            >
              <Typography variant="bodySmall" color="#8C8C8C">
                Enter worker’s name
              </Typography>
              <TextField
                variant="standard"
                id="outlined-basic"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{
                  maxHeight: "32px",
                  fontSize: "14px",
                }}
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                size="small"
                fullWidth
                placeholder="Email"
                sx={{
                  border: "1px solid #414E66",
                  borderRadius: "3px",
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
                onChange={handleUserEmailNameChange}
              />
              <Box sx={{ paddingTop: "16px", alignSelf: "end" }}>
                <PrimaryButton text="Add" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
