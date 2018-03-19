import _ from "lodash";
import sendEmailDaily from "./send_email_daily";
import sendEmailOnce3Days from "./send_email_once_3_days";
import moment from "moment";

const Rules = [sendEmailDaily, sendEmailOnce3Days];

export default class {
  get ApplicableTo() {
    return "UserEmail";
  }

  Apply(model, additionalParams = {date: moment()}) {
    if (_.isEqual(model.ModelName, this.ApplicableTo)) {
      for (let rule of Rules) {
        model = rule(model, additionalParams);
        // console.log(model.shall_send_today);
      }
    }

    return model;
  }
}
