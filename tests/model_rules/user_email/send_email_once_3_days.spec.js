"use strict";

import sendEmailRule from "@app/src/model_rules/user_email/send_email_once_3_days";
import {expect} from "chai";
import moment from "moment";

describe("Send email to Non Responsive User", () => {
  it("should affirm on sending email to a not-responsive user", () => {
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

    expect(
      sendEmailRule(
        {
          user: {IsActive: false, IsNotResponsive: true, IsInActive: false},
          last_sent: moment()
            .subtract(3, "days")
            .toDate(),
        },
        {date: moment()}
      )
    ).to.have.property("shall_send_today").to.be.true;

    expect(
      sendEmailRule(
        {
          user: {IsActive: false, IsNotResponsive: true, IsInActive: false},
          last_sent: moment()
            .subtract(4, "days")
            .toDate(),
        },
        {date: moment()}
      )
    ).to.have.property("shall_send_today").to.be.true;

    expect(
      sendEmailRule(
        {
          user: {IsActive: false, IsNotResponsive: true, IsInActive: false},
          last_sent: moment().toDate(),
        },
        {date: moment()}
      )
    ).to.not.have.property("shall_send_today");

    let beforeRule = {
      user: {IsActive: true, IsNotResponsive: false, IsInActive: false},
      last_sent: moment()
        .subtract(2, "days")
        .toDate(),
    };

    expect(sendEmailRule(beforeRule, {date: moment()})).to.eql(beforeRule);
  });
});
