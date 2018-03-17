# Emailing System

## Tasks
1. Build an emailing system which sends emails to user once everyday. Each user may recieve an email based on one of the following states;
    - Active (Sends an email to this user daily)
    - Not Responsive (Sends an email to this user once every 3 days)
    - In-Active (Don't sends any email to this user)

## Conditions
- Every day before sending emails, the system updates all users' state, based on the following rules:
    - If the user is `Active` and user last login was more than 4 days ago, then mark this user as `Not Responsive`
    - If the user is `Not Responsive` and user last login was more than 2 days ago, then mark this user as `In-Active`
    - If the user is `Not Responsive` and logged in during the past 2 days, mark this user as `Active`

These requirements are regularly renegotiated, so we want the rules to be as flexible as possible as they can change in the future with little notice.

The email system has a dashboard where we can see the emails that are sent and to which user it was sent to.