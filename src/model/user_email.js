import moment from "moment";

export default class {
  constructor(fromUserEmail) {
    this.user = fromUserEmail.user;
    this.last_sent = fromUserEmail.last_sent;
  }

  UpdateLastSent(date = moment().toDate()) {
    this.last_sent = date;
  }

  get ModelName() {
    return "UserEmail";
  }
}
