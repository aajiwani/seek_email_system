import User from "@app/src/model/user";
import faker from "faker";
import moment from "moment";
import randomDate from "@app/src/lib/random_date";
import randomUserStatus from "@app/src/lib/random_user_status";

const generator = {
  generate: (numUserGenerate = 20) => {
    let result = [];
    for (let i = 0; i < numUserGenerate; i++) {
      result.push(
        new User({
          name: faker.name.findName(),
          email: faker.internet.email(),
          website: faker.internet.url(),
          address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          bio: faker.lorem.sentences(),
          image: faker.image.avatar(),
          last_login: randomDate(
            moment()
              .subtract(7, "d")
              .toDate(),
            moment().toDate()
          ),
          status: randomUserStatus(),
        })
      );
    }
    return result;
  },
};

export default generator;
