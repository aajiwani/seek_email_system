"use strict";

import convertRule from "@app/src/model_rules/user/convert_to_inactive";
import {expect} from "chai";
import moment from "moment";

describe("Convert user to in-active", () => {
  it("should convert a not responsive user to in-active", () => {
    expect(
      convertRule({
        status: "Not Responsive",
        last_login: moment().subtract(3, "days"),
      })
    )
      .to.have.property("status")
      .eq("In Active");

    expect(
      convertRule({
        status: "Not Responsive",
        last_login: moment().subtract(2, "days"),
      })
    )
      .to.have.property("status")
      .eq("Not Responsive");

    expect(
      convertRule({
        status: "Not Responsive",
        last_login: moment().subtract(4, "days"),
      })
    )
      .to.have.property("status")
      .eq("In Active");
  });

  let beforeRule = {
    status: "In Active",
    last_login: moment().subtract(2, "days"),
  };

  expect(convertRule(beforeRule)).to.eql(beforeRule);
});
