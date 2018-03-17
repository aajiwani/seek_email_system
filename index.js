import express from "express";
import user_generator from "@app/src/lib/user_generator";
import users_daily_task from "@app/src/daily_tasks/users";

const num_fake_users = 20;

const app = express();
let users = user_generator.generate(num_fake_users);

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

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
