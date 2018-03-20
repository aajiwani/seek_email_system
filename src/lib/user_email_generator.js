import UserEmail from "@app/src/model/user_email";
import userStatus from "@app/src/model_helpers/user_status";
import faker from "faker";
import moment from "moment";
import randomDate from "@app/src/lib/random_date";

const dateGenerator = status => {
  switch (status) {
    case userStatus.ACTIVE:
      return moment()
        .subtract(1, "d")
        .toDate();

    case userStatus.NOT_RESPONSIVE:
      return moment()
        .subtract(3, "d")
        .toDate();

    case userStatus.INACTIVE:
      return moment()
        .subtract(4, "d")
        .toDate();
  }
};

const generator = {
  generate: users => {
    let result = [];
    for (let user of users) {
      result.push(
        new UserEmail({
          user: user,
          last_sent: dateGenerator(user.status),
        })
      );
    }

    return result;
  },
};

// randomDate(
//             moment()
//               .subtract(7, "d")
//               .toDate(),
//             moment().toDate()
//           ),

export default generator;
