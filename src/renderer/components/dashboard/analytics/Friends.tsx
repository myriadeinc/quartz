import { Card, Grow, Typography } from "@mui/material";

export const Friends = () => {
  return (
    <Grow in={true} timeout={2000}>
      <Card
        elevation={0}
        style={{
          height: "100%",
          backgroundColor: "#2f3136",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          style={{ backgroundColor: "#202225", padding: "16px" }}
        >
          Friends
        </Typography>

        <div style={{ width: "100%", textAlign: "center", paddingTop: "16px" }}>
          <Typography variant="body1">No active friends</Typography>
        </div>
      </Card>
    </Grow>
  );
};
