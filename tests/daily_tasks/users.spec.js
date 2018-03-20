"use strict";

import task_update_users from "@app/src/daily_tasks/users";
import {expect} from "chai";
import moment from "moment";

describe("Email Send Task", () => {
  it("should apply rules and produce outputs", () => {
    let usersEmails = [
      {
        status: "Active",
        name: "Amir",
        ModelName: "User",
        last_login: moment().subtract(5, "days"),
      },
      {
        status: "Not Responsive",
        name: "Jahangir",
        ModelName: "User",
        last_login: moment().subtract(3, "days"),
      },
      {
        status: "Not Responsive",
        name: "Ghulam",
        ModelName: "User",
        last_login: moment().subtract(1, "days"),
      },
    ];

    let updateUsersResult = task_update_users(usersEmails);

    expect(updateUsersResult)
      .to.have.property("changes")
      .to.eql(usersEmails);

    expect(updateUsersResult)
      .to.have.property("users")
      .to.eql([
        Object.assign({}, usersEmails[0], {
          status: "Not Responsive",
        }),
        Object.assign({}, usersEmails[1], {
          status: "In Active",
        }),
        Object.assign({}, usersEmails[2], {
          status: "Active",
        }),
      ]);
  });
});
