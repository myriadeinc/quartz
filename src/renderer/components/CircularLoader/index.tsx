import CircularProgress from "@mui/material/CircularProgress";
type isLoadingInMainApp = true | false;
export const CircularProgressLoader = ({
  isLoaderInMainApp,
}: isLoadingInMainApp) => {
  return (
    <CircularProgress
      size={70}
      sx={{
        position: "fixed",
        left: isLoaderInMainApp ? "50%" : { sm: "65%", md: "60%", lg: "60%" },
        willChange: "transform",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
      }}
    />
  );
};
