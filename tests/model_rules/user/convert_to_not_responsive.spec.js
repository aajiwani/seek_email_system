"use strict";

import convertRule from "@app/src/model_rules/user/convert_to_not_responsive";
import {expect} from "chai";
import moment from "moment";

describe("Convert user to not-responsive", () => {
  it("should convert an active user to not-responsive", () => {
    expect(
      convertRule({
        status: "Active",
        last_login: moment().subtract(5, "days"),
      })
    )
      .to.have.property("status")
      .eq("Not Responsive");

    expect(
      convertRule({
        status: "Active",
        last_login: moment().subtract(4, "days"),
      })
    )
      .to.have.property("status")
      .eq("Active");

    expect(
      convertRule({
        status: "Not Responsive",
        last_login: moment().subtract(4, "days"),
      })
    )
      .to.have.property("status")
      .eq("Not Responsive");
  });

  let beforeRule = {status: "Active", last_login: moment().subtract(2, "days")};

  expect(convertRule(beforeRule)).to.eql(beforeRule);
});
