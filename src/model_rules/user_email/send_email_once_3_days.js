import moment from "moment";
import _ from "lodash";

/**
 * Transforms data to add more meaning
 * @param {UserEmail} model
 */
const model = model => {
  model = Object.assign({}, model, {shall_send_today: false});

  if (
    model.user.IsNotResponsive &&
    moment().diff(model.last_sent, "days") >= 3
  ) {
    model.shall_send_today = true;
  }
  return model;
};

export default model;
