# Email System

With this project, we are trying to solve the problem mentioned in PROBLEM.md

## Pre-Requisites

Make sure that `node` and `yarn` are installed before proceeding further.

## Server

Server could be started by running
`yarn start` under root folder. Server runs on port 3001, please take note that this port should be available and not binded to anything else.

All the codes are covered with tests, please use `yarn test` to perform the tests and generate an HTML report under coverage.

## Client

Client could be started by running
`yarn start` under root/src/client

There are 2 buttons on the UI

* Update Users:
  It calls the update users api, that executes the rules that changes the users status depending upon their login status.

* Send Emails:
  Sends emails to the user depending upon their status and their last login.

Initially the UI makes a call to get in all the users, to facilitate with user loading. Both buttons are independent and could be called in combination to have effect on who to send the emails.

---

## Available APIs

* GET `/users`
  Fetches randomly generated users on the server.

* GET `/daily_tasks/users`
  Performs the user status update tasks dependent upon the rules and their business logic.

* POST `/daily_tasks/send_emails`
  Performs sending of email dependent upon the rules logic.

At the moment server is generating user data on the fly, which could later be replaced by a persistent datasource. In case of randomizing data, please consider restarting the server.
