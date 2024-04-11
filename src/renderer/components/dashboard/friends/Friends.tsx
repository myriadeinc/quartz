import Grow from "@mui/material/Grow";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { IFriend } from "renderer/interfaces/pages/dashboard";
import { DUMMY_FRIENDS_DATA } from "const";
export const Friends = () => {
  return (
    <Grid container item style={{ width: "0", marginLeft: "360px" }}>
      <Grid item sm={6}>
        <Grow in={true}>
          <div style={{ height: "100%" }}>
            <FriendMenu />
          </div>
        </Grow>
      </Grid>
      <Grid item sm={6}>
        <Grow in={true} timeout={500}>
          <div>
            <FriendStats />
          </div>
        </Grow>
      </Grid>
    </Grid>
  );
};

export const FriendMenu = () => {
  return (
    <Card
      elevation={0}
      style={{
        height: "100%",
        backgroundColor: "#0F141F",
        borderRadius: "7px",
        color: "white",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          style={{ backgroundColor: "#080A0F", padding: "2rem 0" }}
        >
          Friends
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#0F141F" }}>
        <Box>
          {DUMMY_FRIENDS_DATA.length == 0 ? (
            <div
              style={{ width: "100%", textAlign: "center", paddingTop: "16px" }}
            >
              <Typography variant="body1">No active friends</Typography>
            </div>
          ) : (
            <List>
              {DUMMY_FRIENDS_DATA.map((friend, index) => (
                <Friend {...friend} key={index} />
              ))}
            </List>
          )}
        </Box>
      </Box>
    </Card>
  );
};

const FriendStats = () => {
  return (
    <Typography variant="h4" style={{ color: "white", padding: "16px" }}>
      Friend Stats
    </Typography>
  );
};

const Friend = (props: IFriend) => {
  const { name, status, avatar } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={status} />
    </ListItem>
  );
};
