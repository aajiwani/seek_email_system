import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import GridList from "material-ui/GridList";
import Avatar from "material-ui/Avatar";
import {ListItem, ListItemText} from "material-ui/List";
import Divider from "material-ui/Divider";
import deepOrange from "material-ui/colors/deepOrange";
import blueGrey from "material-ui/colors/blueGrey";
import lightGreen from "material-ui/colors/lightGreen";

const tileStyles = status => {
  switch (status) {
    case "Active":
      return lightGreen[200];

    case "Not Responsive":
      return deepOrange[900];

    case "In Active":
      return blueGrey[300];

    default:
      return;
  }
};

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleText: {
    align: "center",
  },
});

function SingleLineGridList(props) {
  const {classes, users} = props;

  return (
    <div>
      <Divider />
      <p className={classes.titleText}>
        <b>Changed users</b>
      </p>
      <div className={classes.root}>
        <Divider />
        <GridList className={classes.gridList} cellHeight="auto" cols={3}>
          {users.map(user => (
            <ListItem
              style={{
                backgroundColor: tileStyles(user.status),
                marginLeft: 5,
                marginRight: 5,
              }}
              key={user.id}
            >
              <Avatar src={user.image} />
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))}
        </GridList>
      </div>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
