import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";
import moment from "moment";
import user_generator from "@app/src/lib/user_generator";
import user_email_generator from "@app/src/lib/user_email_generator";
import user_email_mapper from "@app/src/lib/user_email_mapper";
import users_daily_task from "@app/src/daily_tasks/users";
import send_emails_task from "@app/src/daily_tasks/send_emails";

const num_fake_users = 20;

const app = express();
app.use(bodyParser.json());

let users = user_generator.generate(num_fake_users);
let user_emails = user_email_generator.generate(users);

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/daily_tasks/users", (req, res) => {
  let taskResult = users_daily_task(users);
  users = taskResult.users;
  //console.dir(user_emails);
  user_emails = user_email_mapper.map(users, user_emails);
  //console.dir(user_emails);
  res.send({
    users: taskResult.users,
    changed_users: taskResult.changes,
  });
});

app.post("/daily_tasks/send_emails", (req, res) => {
  let date = moment();
  if (_.has(req, "body.date")) date = moment(req.body.date);
  let taskResult = send_emails_task(user_emails, date);
  user_emails = taskResult.user_emails;
  res.send({
    emails_sent: taskResult.sent_to,
  });
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
