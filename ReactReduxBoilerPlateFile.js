import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

//redux
import { connect } from "react-redux";

//mui stuff
import Buttom from "@material-ui/core/Button";

// icons

const styles = theme => ({
  ...theme.globalStyles
});

class ReactReduxBoilerPlateFile extends Component {
  render() {
    const { classes } = this.props;
    return <div></div>;
  }
}

ReactReduxBoilerPlateFile.propTypes = {
  user: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(
  withStyles(styles)(ReactReduxBoilerPlateFile)
);
