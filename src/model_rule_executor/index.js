import _ from "lodash";

export default class {
  constructor(model_rules) {
    this.rules = model_rules;
  }

  evaluate(model, additionalParams = null) {
    for (let rule of this.rules) {
      model = rule.Apply(model, additionalParams);
    }
    return model;
  }
}
