import UserEmail from "@app/src/model/user_email";
import faker from "faker";
import moment from "moment";
import randomDate from "@app/src/lib/random_date";

const generator = {
  generate: users => {
    let result = [];
    for (let user of users) {
      result.push(
        new UserEmail({
          user: user,
          last_sent: randomDate(
            moment()
              .subtract(7, "d")
              .toDate(),
            moment().toDate()
          ),
        })
      );
    }

    return result;
  },
};

export default generator;
