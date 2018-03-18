import express from "express";
import user_generator from "@app/src/lib/user_generator";
import user_email_generator from "@app/src/lib/user_email_generator";
import users_daily_task from "@app/src/daily_tasks/users";
import send_emails_task from "@app/src/daily_tasks/send_emails";

const num_fake_users = 20;

const app = express();
let users = user_generator.generate(num_fake_users);
let user_emails = user_email_generator.generate(users);

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/daily_tasks/users", (req, res) => {
  let taskResult = users_daily_task(users);
  users = taskResult.users;
  res.send({
    changed_users: taskResult.changes,
  });
});

app.get("/daily_tasks/send_emails", (req, res) => {
  let taskResult = send_emails_task(user_emails);
  user_emails = taskResult.user_emails;
  res.send({
    emails_sent: taskResult.sent_to,
  });
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
