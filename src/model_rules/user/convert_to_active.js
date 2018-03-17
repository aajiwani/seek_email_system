import moment from "moment";
import userStatus from "@app/src/model_helpers/user_status";
import _ from "lodash";

const model = model => {
  if (
    _.isEqual(model.status, userStatus.NOT_RESPONSIVE) &&
    moment().diff(model.last_login, "days") <= 2
  ) {
    model = Object.assign({}, model, {
      status: userStatus.ACTIVE,
    });
  }
  return model;
};

export default model;
