import moment from "moment";
import userStatus from "@app/src/model_helpers/user_status";
import _ from "lodash";

const model = model => {
  if (
    _.isEqual(model.status, userStatus.ACTIVE) &&
    moment().diff(model.last_login, "days") > 4
  ) {
    model = Object.assign({}, model, {
      status: userStatus.NOT_RESPONSIVE,
    });
  }
  return model;
};

export default model;
