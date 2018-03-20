import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import List, {ListItem, ListItemText} from "material-ui/List";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import UserStatus from "./UserStatus";
import moment from "moment";

const styles = theme => ({
  root: {
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
});

function SimpleList(props) {
  const {classes, users} = props;
  return (
    <div className={classes.root}>
      Users
      <Divider />
      <List>
        {users.map(item => {
          return (
            <ListItem key={item.id}>
              <Avatar src={item.image} />
              <ListItemText
                primary={item.name}
                secondary={
                  <div>
                    <div>{item.email}</div>
                    <div>
                      Last login: {moment(item.last_login).format("DD-MM-YYYY")}
                    </div>
                  </div>
                }
              />
              <UserStatus status={item.status} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
