import _ from "lodash";
import moment from "moment";

/**
 * Transforms data to add more meaning
 * @param {UserEmail} model
 */
const model = (model, additionalParams) => {
  if (
    model.user.IsActive &&
    additionalParams.date.diff(moment(model.last_sent), "days") >= 0
  ) {
    model = Object.assign({}, model, {shall_send_today: true});
  }
  return model;
};

export default model;
