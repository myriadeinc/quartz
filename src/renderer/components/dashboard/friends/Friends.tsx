import {
  Avatar,
  Card,
  Grid,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { IFriend } from "renderer/interfaces/pages/dashboard";

const dummyData = [
  {
    name: "sfd",
    status: "mining",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "mining",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
  ,
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
] as IFriend[];

export const Friends = () => {
  return (
    <Grid
      container
      item
      style={{ width: "calc(100% - 360px)", marginLeft: "360px" }}
    >
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

      {dummyData.length == 0 ? (
        <div style={{ width: "100%", textAlign: "center", paddingTop: "16px" }}>
          <Typography variant="body1">No active friends</Typography>
        </div>
      ) : (
        <List>
          {dummyData.map((friend, index) => (
            <Friend {...friend} key={index} />
          ))}
        </List>
      )}
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
