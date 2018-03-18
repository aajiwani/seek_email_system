import _ from "lodash";
import model_rule_executor from "@app/src/model_rule_executor";
import model_rule_user_email from "@app/src/model_rules/user_email";

let executor = new model_rule_executor([new model_rule_user_email()]);

/**
 * @param {UserEmail[]} model
 */
export default userEmails => {
  shall_send_today;

  let shadowData = [...userEmails];
  let result = null;
  let sentEmailTo = [];
  for (let i in shadowData) {
    result = executor.evaluate(shadowData[i]);
    if (_.has(result, "shall_send_today") && result.shall_send_today) {
      sentEmailTo.push(shadowData[i].email);
    }
    shadowData[i] = result;
  }

  return {
    user_emails: shadowData,
    sent_to: sentEmailTo,
  };
};
