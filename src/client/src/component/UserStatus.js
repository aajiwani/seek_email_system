import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import deepOrange from "material-ui/colors/deepOrange";
import blueGrey from "material-ui/colors/blueGrey";
import lightGreen from "material-ui/colors/lightGreen";

const avatarStyles = {
  notResponsive: {
    color: "#fff",
    backgroundColor: deepOrange[900],
  },
  inActive: {
    color: "#fff",
    backgroundColor: blueGrey[300],
  },
  active: {
    color: "#fff",
    backgroundColor: lightGreen[200],
  },
};

function StatusAvatar(props) {
  const {status, classes} = props;

  let view = null;
  switch (status) {
    case "Active":
      view = <Avatar className={classes.active}>A</Avatar>;
      break;

    case "Not Responsive":
      view = <Avatar className={classes.notResponsive}>NR</Avatar>;
      break;

    case "In Active":
      view = <Avatar className={classes.inActive}>IA</Avatar>;
      break;
  }
  return view;
}

StatusAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(avatarStyles)(StatusAvatar);
