import {
  Avatar,
  Card,
  Grid,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IFriend } from "renderer/interfaces/pages/dashboard";
import bear from "../../../../assets/avatars/Bear.png";
import bird from "../../../../assets/avatars/Bird.png";
import bunny from "../../../../assets/avatars/Bunny.png";
import cat from "../../../../assets/avatars/Cat.png";
import cheetah from "../../../../assets/avatars/Cheetah.png";
import cobra from "../../../../assets/avatars/Cobra.png";
import cow from "../../../../assets/avatars/Cow.png";

const useStyles = makeStyles({
  cardStyle: {
    height: "100%",
    backgroundColor: "#2f3136",
    color: "white",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
  avatarStyle: {
    height: "54px",
    width: "54px",
    marginRight: "10px"
  },
  nameStyle: {
    fontSize: "1.5rem"
  },
  subtitleStyle: {
    color: "#EAEAEA",
    fontSize: "0.9rem",
    fontWeight: "300"
  }
});

const dummyData = [
  {
    name: "Salt.Mine",
    status: "mining",
    avatar: bear,
    id: 69
  },
  {
    name: "Ashousha",
    status: "mining",
    avatar: bird,
    id: 74
  },
  {
    name: "SenorToots",
    status: "mining",
    avatar: bunny,
    id: 32
  },
  {
    name: "ratatouille",
    status: "mining",
    avatar: cat,
    id: 89
  },
  {
    name: "SingingPancakes",
    status: "offline",
    avatar: cheetah,
    id: 2
  },
  {
    name: "DellaSaucy",
    status: "offline",
    avatar: cobra,
    id: 6
  },
  {
    name: "BlunterFoil",
    status: "offline",
    avatar: cow,
    id: 16
  },
] as IFriend[];

export const Friends = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
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
  const classes = useStyles();

  return (
    <div>
      <Card
        elevation={0}
        className={classes.cardStyle}
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
            {dummyData.map((friend) => (
              <Friend {...friend} key={friend.id} />
            ))}
          </List>
        )}
      </Card>
    </div>
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
  const classes = useStyles();
  const { name, status, avatar, id } = props;
  return (
    <ListItem style={{
      marginTop: "8px",
    }}>
      <ListItemAvatar>
        {status == "mining" ? 
          <Avatar 
            className={classes.avatarStyle}
            style={{
              border: "3px solid #76FF02",
            }}
            src={avatar}
          /> :
          <Avatar 
            className={classes.avatarStyle}
            style={{
              border: "3px solid #F11503",
            }}
            src={avatar}
          />
        }
      </ListItemAvatar>

      <div>
        <Typography className={classes.nameStyle} variant="body1" >
            {name}
            <span className={classes.subtitleStyle}>{` #${id}`}</span>
        </Typography>
        <Typography className={classes.subtitleStyle} variant="caption" >
          {status == "mining" ? `Mining for ${status}` : status}
        </Typography>
      </div>
    </ListItem>
  );
};
