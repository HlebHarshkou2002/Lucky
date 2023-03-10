import React from "react";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>Log Out</button>;
    } else {
      button = <button onClick={this.handleLoginClick}>Log In</button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginControl;