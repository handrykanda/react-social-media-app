import React, { Component } from "react";
import PropTypes from "prop-types";
import AppIcon from "../assets/images/handry_icon.gif";
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
  ...theme.globalStyles,
});

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      loading: false,
      errors: {},
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      username: this.state.username,
    };
    //fire signupUser action
    this.props.signupUser(newUserData, this.props.history);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Grid className={classes.form} container spacing={0}>
        <Grid item sm={3} xs={12}></Grid>
        <Grid className={classes.formContainer} item sm={6} xs={12}>
          <img
            src={AppIcon}
            alt="Airchat Icon"
            height="100px"
            className={classes.image}
          />
          <Typography variant="h5" className={classes.pageTitle}>
            New account for free!
          </Typography>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              autoComplete="off"
              className={classes.textField}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              label="Username"
              helperText={errors.username}
              error={errors.username ? true : false}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoComplete="off"
              className={classes.textField}
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              label="Email"
              helperText={errors.email}
              error={errors.email ? true : false}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoComplete="off"
              className={classes.textField}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              label="Password"
              helperText={errors.password}
              error={errors.password ? true : false}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoComplete="off"
              className={classes.textField}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              label="Confirm password"
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              onChange={this.handleChange}
              fullWidth
            />

            {errors.general && (
              <Typography variant="body2" className={classes.generalError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              signup
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small className={classes.info}>
              Already have an acoount? login <Link to="/login">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm={3} xs={12}></Grid>
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapstateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  signupUser,
};

export default connect(
  mapstateToProps,
  mapActionsToProps
)(withStyles(styles)(signup));
