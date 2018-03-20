import React, {Component} from "react";
import logo from "./logo.svg";
import Button from "material-ui/Button";
import "./App.css";
import UsersList from "./component/UsersList";
import UserChangeStatus from "./component/UserChangeStatus";
import EmailStatus from "./component/EmailStatus";
import cyan from "material-ui/colors/cyan";
import moment from "moment";
import Grid from "material-ui/Grid";

const styles = {
  actionButton: {
    color: "#fff",
    backgroundColor: cyan[700],
    margin: 10,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      changed_users: [],
      email_sent_to: [],
    };
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users,
        });
        console.log(users);
      });
  }

  onUpdateUsersClick() {
    fetch("/daily_tasks/users")
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          users: resJson.users,
          changed_users: resJson.changed_users,
        });
      });
  }

  onSendEmailsClick() {
    fetch("/daily_tasks/send_emails", {
      method: "post",
      body: JSON.stringify({date: moment().toDate()}),
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson.emails_sent);
        this.setState({email_sent_to: resJson.emails_sent});
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Seek Email System</h1>
        </header>
        <p className="App-intro">
          You can call the daily tasks <code>user_update, send_email</code>{" "}
          here.
        </p>
        <Button
          variant="raised"
          color="inherit"
          style={styles.actionButton}
          onClick={this.onUpdateUsersClick.bind(this)}
        >
          Update users
        </Button>
        <Button
          variant="raised"
          color="inherit"
          style={styles.actionButton}
          onClick={this.onSendEmailsClick.bind(this)}
        >
          Send emails
        </Button>
        {this.state.changed_users.length > 0 ? (
          <UserChangeStatus users={this.state.changed_users} />
        ) : null}

        <Grid container style={{flexGrow: 1}} spacing={24}>
          <Grid item xs={12} md={6} justify="center">
            {this.state.users.length > 0 ? (
              <div style={{flex: 0.5}}>
                <UsersList users={this.state.users} />
              </div>
            ) : null}
          </Grid>
          <Grid item xs={12} md={6} justify="center">
            {this.state.email_sent_to.length > 0 ? (
              <div style={{flex: 0.5}}>
                <EmailStatus email_result={this.state.email_sent_to} />
              </div>
            ) : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
