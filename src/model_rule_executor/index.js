import _ from "lodash";

export default class {
  constructor(model_rules) {
    this.rules = model_rules;
  }

  evaluate(model) {
    for (let rule of this.rules) {
      model = rule.Apply(model);
    }
    return model;
  }
}
