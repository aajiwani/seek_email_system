import UserEmail from "@app/src/model/user_email";
import _ from "lodash";
import moment from "moment";
import randomDate from "@app/src/lib/random_date";

const mapper = {
  map: (users, old_user_emails) => {
    return old_user_emails.map(item => {
      let foundUser = _.find(users, user => {
        return _.isEqual(user.id, item.user.id);
      });

      if (foundUser) {
        return new UserEmail({
          user: foundUser,
          last_sent: item.last_sent,
        });
      }
    });
  },
};

export default mapper;
