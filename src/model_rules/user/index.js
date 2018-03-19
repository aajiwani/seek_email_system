import _ from "lodash";
import convertToActive from "./convert_to_active";
import convertToInactive from "./convert_to_inactive";
import convertToNotResponsive from "./convert_to_not_responsive";

const Rules = [convertToActive, convertToInactive, convertToNotResponsive];

export default class {
  get ApplicableTo() {
    return "User";
  }

  Apply(model, additionalParams) {
    if (_.isEqual(model.ModelName, this.ApplicableTo)) {
      for (let rule of Rules) {
        model = rule(model, additionalParams);
      }
    }

    return model;
  }
}
