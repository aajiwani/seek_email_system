import userStatus from "@app/src/model_helpers/user_status";
import _ from "lodash";
export default class {
  constructor(fromUser) {
    this.id = fromUser.id;
    this.name = fromUser.name;
    this.email = fromUser.email;
    this.website = fromUser.website;
    this.address = fromUser.address;
    this.bio = fromUser.bio;
    this.image = fromUser.image;
    this.last_login = fromUser.last_login;
    this.status = fromUser.status;
  }

  get ModelName() {
    return "User";
  }

  get IsActive() {
    return _.isEqual(userStatus.ACTIVE, this.status);
  }

  get IsInActive() {
    return _.isEqual(userStatus.INACTIVE, this.status);
  }

  get IsNotResponsive() {
    return _.isEqual(userStatus.NOT_RESPONSIVE, this.status);
  }
}
