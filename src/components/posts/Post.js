import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

//components
import MyButton from "../../util/MyButton";
import DeletePost from "./DeletePost";
import PostDialog from "./PostDialog";
import LikeButton from "./LikeButton";

//redux
import { useSelector, shallowEqual } from "react-redux";

//mui stuff
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//import { Link } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Icons
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    position: "relative",
    marginBottom: 20,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#001389",
    objectFit: "cover",
  },
  deleteMenuItem: {
    // width: "50%"
  },
}));

export default function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false); //hooks
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEllipsisClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEllipsisClose = () => {
    setAnchorEl(null);
  };

  // redux store access
  const { user } = useSelector(
    (state) => ({
      user: state.user,
    }),
    shallowEqual
  );
  //const dispatch = useDispatch();

  const {
    body,
    createdAt,
    userImage,
    username,
    postId,
    likeCount,
    commentCount,
  } = props.post;

  const { authenticated } = user;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt={username}
            src={userImage}
            aria-label="profile"
            className={classes.avatar}
          ></Avatar>
        }
        action={
          authenticated && username === user.credentials.username ? (
            <div>
              <IconButton aria-label="settings">
                <MoreVertIcon onClick={handleEllipsisClick} />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleEllipsisClose}
              >
                <MenuItem
                  component={Link}
                  to={`/users/${username}`}
                  onClick={handleEllipsisClose}
                >
                  View your profile
                </MenuItem>
                <MenuItem onClick={handleEllipsisClose}>View post</MenuItem>
                <MenuItem onClick={handleEllipsisClose}>Copy link</MenuItem>
                <MenuItem
                  className={classes.deleteMenuItem}
                  onClick={handleEllipsisClose}
                >
                  <DeletePost postId={postId} />
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton aria-label="settings">
                <MoreVertIcon onClick={handleEllipsisClick} />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleEllipsisClose}
              >
                <MenuItem
                  component={Link}
                  to={`/users/${username}`}
                  onClick={handleEllipsisClose}
                >
                  {`View ${username}'s Profile`}
                </MenuItem>
                <MenuItem onClick={handleEllipsisClose}>
                  {`Tag ${username}`}
                </MenuItem>
                <MenuItem onClick={handleEllipsisClose}>View post</MenuItem>
                <MenuItem onClick={handleEllipsisClose}>Copy link</MenuItem>
              </Menu>
            </div>
          )
        }
        title={
          <Typography
            className={classes.title}
            variant="h5"
            color="primary"
            component={Link}
            to={`/users/${username}`}
          >
            {username}
          </Typography>
        }
        subheader={moment(createdAt || moment.now()).fromNow()}
      />
      <CardMedia></CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <LikeButton postId={postId} username={username} />
        <span>{likeCount}</span>
        <MyButton tip="comment this">
          <ChatIcon color="primary" />
        </MyButton>
        <span>{commentCount} comments</span>
        <PostDialog
          postId={postId}
          username={username}
          openDialog={props.openDialog}
        />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
            This won't be a real social networking site. It's kinda like a
            training ground, real matches are coming soon that needs real
            grounds.
            <span role="img" aria-label="p">
              {" "}
              😎😎😎
            </span>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
