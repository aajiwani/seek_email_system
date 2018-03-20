import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Chip from "material-ui/Chip";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import moment from "moment";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing.unit,
  },
  titleText: {
    align: "center",
  },
});

function EmailSentList(props) {
  const {classes, email_result} = props;
  return (
    <div className={classes.root}>
      <p className={classes.titleText}>
        <b>Emails sent</b>
      </p>
      <Divider />
      <List component="nav">
        {email_result.map(item => {
          return (
            <Chip
              label={
                item.user.name +
                "- (" +
                moment(item.last_sent).format("DD-MM-YYYY") +
                ")"
              }
              className={classes.chip}
              avatar={<Avatar src={item.user.image} />}
            />
          );
        })}
      </List>
    </div>
  );
}

EmailSentList.propTypes = {
  classes: PropTypes.object.isRequired,
  email_result: PropTypes.array.isRequired,
};

export default withStyles(styles)(EmailSentList);
