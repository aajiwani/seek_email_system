"use strict";

import task_send_emails from "@app/src/daily_tasks/send_emails";
import {expect} from "chai";
import moment from "moment";

describe("Email Send Task", () => {
  it("should apply rules and produce outputs", () => {
    let usersEmails = [
      {
        user: {
          status: "Active",
          name: "Amir",
          IsActive: true,
          IsNotResponsive: false,
          IsInActive: false,
        },
        last_sent: moment()
          .subtract(2, "days")
          .toDate(),
        ModelName: "UserEmail",
        UpdateLastSent: () => {},
      },
      {
        user: {
          status: "Not Responsive",
          name: "Jahangir",
          IsActive: false,
          IsNotResponsive: true,
          IsInActive: false,
        },
        last_sent: moment()
          .subtract(3, "days")
          .toDate(),
        ModelName: "UserEmail",
        UpdateLastSent: () => {},
      },
      {
        user: {
          status: "In Active",
          name: "Ghulam",
          IsActive: false,
          IsNotResponsive: false,
          IsInActive: true,
        },
        last_sent: moment().toDate(),
        ModelName: "UserEmail",
        UpdateLastSent: () => {},
      },
    ];

    let sendEmailResult = task_send_emails(usersEmails);

    expect(sendEmailResult)
      .to.have.property("user_emails")
      .to.eql(usersEmails);

    expect(sendEmailResult)
      .to.have.property("sent_to")
      .to.eql([usersEmails[0], usersEmails[1]]);
  });
});
