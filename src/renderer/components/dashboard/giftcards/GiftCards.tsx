import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
export const GiftCards = () => {
  return (
    <Grid
      container
      item
      style={{ width: "1473px", marginLeft: "406px" }}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >
      <Grid item sm={4}>
        <div style={{ position: "relative" }}>
          <Grid>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "28px",
                color: "#EAEAEA",
                marginTop: "25px",
                marginLeft: "20px",
                fontWeight: 400,
              }}
            >
              Gift Cards
            </Typography>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
