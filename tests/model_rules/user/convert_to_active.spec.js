"use strict";

import convertRule from "@app/src/model_rules/user/convert_to_active";
import {expect} from "chai";
import moment from "moment";

describe("Convert user to active", () => {
  it("should convert a not responsive user to active", () => {
    expect(
      convertRule({
        status: "Not Responsive",
        last_login: moment().subtract(2, "days"),
      })
    )
      .to.have.property("status")
      .eq("Active");

    expect(
      convertRule({
        status: "Not Responsive",
        last_login: moment().subtract(3, "days"),
      })
    )
      .to.have.property("status")
      .eq("Not Responsive");

    expect(
      convertRule({
        status: "In Active",
        last_login: moment().subtract(2, "days"),
      })
    )
      .to.have.property("status")
      .eq("In Active");

    let beforeRule = {
      status: "In Active",
      last_login: moment().subtract(2, "days"),
    };

    expect(convertRule(beforeRule)).to.eql(beforeRule);
  });
});
