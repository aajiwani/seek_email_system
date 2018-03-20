"use strict";

import sendEmailRule from "@app/src/model_rules/user_email/send_email_daily";
import {expect} from "chai";
import moment from "moment";

describe("Send email to Active User", () => {
  it("should affirm on sending email to an active user", () => {
    //   ACTIVE: "Active",
    // NOT_RESPONSIVE: "Not Responsive",
    // INACTIVE: "In Active",
    expect(
      sendEmailRule(
        {
          user: {IsActive: true, IsNotResponsive: false, IsInActive: false},
          last_sent: moment()
            .subtract(2, "days")
            .toDate(),
        },
        {date: moment()}
      )
    ).to.have.property("shall_send_today").to.be.true;

    expect(
      sendEmailRule(
        {
          user: {IsActive: true, IsNotResponsive: false, IsInActive: false},
          last_sent: moment().toDate(),
        },
        {date: moment()}
      )
    ).to.have.property("shall_send_today").to.be.true;

    expect(
      sendEmailRule(
        {
          user: {IsActive: false, IsNotResponsive: true, IsInActive: false},
          last_sent: moment()
            .subtract(2, "days")
            .toDate(),
        },
        {date: moment()}
      )
    ).to.not.have.property("shall_send_today");

    let beforeRule = {
      user: {IsActive: false, IsNotResponsive: true, IsInActive: false},
      last_sent: moment()
        .subtract(2, "days")
        .toDate(),
    };

    expect(sendEmailRule(beforeRule, {date: moment()})).to.eql(beforeRule);
  });
});
