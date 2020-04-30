import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = (theme) => ({
  ...theme.globalStyles,
});

const ProfileSkeleton = (props) => {
  const { classes } = props;
  return (
    <Paper style={{ marginTop: "5%" }} className={classes.paper}>
      <div style={{ textAlign: "center" }} className={classes.profile}>
        <div className="image-wrapper">
          <Skeleton
            animation="wave"
            variant="circle"
            width={150}
            height={150}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </div>
        <hr />
        <div className="profile-details">
          <Skeleton
            animation="wave"
            height={10}
            width="30%"
            style={{ marginBottom: 6, marginLeft: "auto", marginRight: "auto" }}
          />
          <hr />
          <Skeleton animation="wave" height={10} width="100%" />
          <hr />
          <div style={{ marginBottom: 20 }}></div>
          <Skeleton
            animation="wave"
            height={10}
            width="50%"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
          <hr />
          <Skeleton
            animation="wave"
            height={10}
            width="30%"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </div>
      </div>
    </Paper>
  );
};

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSkeleton);
