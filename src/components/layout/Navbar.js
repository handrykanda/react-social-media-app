import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//redux
import { useSelector, shallowEqual } from "react-redux";
//components
import AddPost from "../posts/AddPost";
import Notifications from "./Notifications";

//mui components
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(27),
      width: "50%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "#fff",
    color: "#001389",
  },
  accountCircle: {
    right: "3%",
    position: "absolute",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // redux store access
  const { authenticated, imageUrl, username } = useSelector(
    (state) => ({
      authenticated: state.user.authenticated,
      imageUrl: state.user.credentials.imageUrl,
      username: state.user.credentials.username,
    }),
    shallowEqual
  );
  //const dispatch = useDispatch();

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {authenticated ? (
        <Fragment>
          <MenuItem
            component={Link}
            to={`/users/${username}`}
            onClick={handleMenuClose}
          >
            Profile
          </MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
            My account
          </MenuItem>
        </Fragment>
      ) : (
        <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
          My account
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="add post" color="inherit">
          <AddPost text="Add post" />
        </IconButton>
      </MenuItem>
      <Notifications notText="Notifications" />
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">
            <Button
              color="inherit"
              component={Link}
              to="/"
              size="large"
              disableRipple
            >
              Airchat
            </Button>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          {authenticated ? (
            <Fragment>
              <Fragment>
                <div className={classes.sectionDesktop}>
                  <Tooltip title="Add new post" placement="bottom-start">
                    <IconButton aria-label="app post" color="inherit">
                      <AddPost text="" />
                    </IconButton>
                  </Tooltip>

                  <Notifications notText="" />
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
                {renderMobileMenu}
                <Tooltip title="Profile" placement="bottom-start">
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <Avatar
                      alt={username}
                      src={imageUrl}
                      className={classes.small}
                    />
                  </IconButton>
                </Tooltip>
              </Fragment>
            </Fragment>
          ) : (
            <Fragment>
              <div>
                <Tooltip title="Please login" placement="bottom-start">
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
              </div>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
}
