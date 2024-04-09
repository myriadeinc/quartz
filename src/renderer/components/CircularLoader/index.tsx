import CircularProgress from "@mui/material/CircularProgress";

export const CircularProgressLoader = () => {
  return (
    <CircularProgress
      size={70}
      sx={{
        position: "fixed",
        left: "50%",
        willChange: "transform",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
      }}
    />
  );
};
