import _ from "lodash";
import moment from "moment";
import model_rule_executor from "@app/src/model_rule_executor";
import model_rule_user_email from "@app/src/model_rules/user_email";

let executor = new model_rule_executor([new model_rule_user_email()]);

/**
 * @param {UserEmail[]} model
 */
export default (userEmails, date = moment()) => {
  let shadowData = [...userEmails];
  let result = null;
  let sentEmailTo = [];
  for (let i in shadowData) {
    result = executor.evaluate(shadowData[i], {date: date});
    if (_.has(result, "shall_send_today") && result.shall_send_today) {
      sentEmailTo.push(shadowData[i]);
      shadowData[i].UpdateLastSent();
    }
  }

  return {
    user_emails: shadowData,
    sent_to: sentEmailTo,
  };
};
