import _ from "lodash";
import sendEmailDaily from "./send_email_daily";
import sendEmailOnce3Days from "./send_email_once_3_days";

const Rules = [sendEmailDaily, sendEmailOnce3Days];

export default class {
  get ApplicableTo() {
    return "UserEmail";
  }

  Apply(model) {
    if (_.isEqual(model.ModelName, this.ApplicableTo)) {
      for (let rule of Rules) {
        model = rule(model);
      }
    }

    return model;
  }
}
