import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "renderer/components/atoms/TextStyles";
import { IconButton } from "@mui/material";
import { CancelButtonIcon } from "renderer/components/atoms/StartMining-I/CancelButton";
import { SuccessIcon } from "renderer/components/atoms/FriendsWorkers/SuccessIcon";
interface WithDrawModalProps {
  setWithdrawModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isWithdrawModalopen: boolean;
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
  border: "none",
  boxShadow: 24,
  //   p: 3,
};

export function WithdrawModal({
  isWithdrawModalopen,
  setWithdrawModalOpen,
}: WithDrawModalProps) {
  const handleClose = () => setWithdrawModalOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isWithdrawModalopen}
      sx={{
        bordeRadius: "7px",
        border: "1px solid transparent",
      }}
      onClose={handleClose}
      closeAfterTransition
    >
      <Box sx={style}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 20px 0 20px",
            }}
          >
            <Typography variant="heading2" color="#EAEAEA">
              Withdraw
            </Typography>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClose}
              edge="end"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
                position: "relative",
                top: "-18px",
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
              padding: "20px 20px 60px 20px",
              alignItems: "center",
            }}
          >
            <SuccessIcon />
            <Typography variant="bodySmall" color="#8C8C8C">
              your withdrawal request has been submitted successfully{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
