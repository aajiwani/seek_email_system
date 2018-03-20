"use strict";

import ModelRuleExecutor from "@app/src/model_rule_executor";
import {expect} from "chai";
import sinon from "sinon";

describe("Model Rule Executor", () => {
  describe("Evaluate rules", () => {
    let rule = null;

    beforeEach(() => {
      rule = sinon.mock({
        Apply: function() {},
        ApplicableTo: "Any",
      });
    });

    it("should apply rules and produce outputs", () => {
      let rules = [rule.object];
      rule.expects("Apply").once();
      let ruleExecutor = new ModelRuleExecutor(rules);

      ruleExecutor.evaluate({
        ModelName: "Any",
      });

      rule.verify();
    });
  });
});
