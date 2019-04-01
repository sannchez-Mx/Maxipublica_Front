import "./styles/App.css";
import {loginService, Signup, editUser, Logout} from './service';
import Router from "./Router";
import {withRouter} from 'react-router-dom';
import React, { Component } from 'react';;


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }
  handleSignup = e => {
    e.preventDefault();
    let {user} = this.state;
    Signup(user, this.props.history);
    this.setState({user})
  };
  handleLogin = e => {
    e.preventDefault();
    let {user} = this.state;
    loginService(user, this.props.history);
    this.setState({user})
  };
  handleChange = e => {
    const { user } = this.state;
    let field = e.target.name;
    user[field] = e.target.files ? e.target.files[0] : e.target.value;
    this.setState({ user });
    //console.log(user);
  };
  handleEditUser = e => {
    e.preventDefault();
    const {user} = this.state;
    editUser(user, user._id, this.props.history)
    this.setState({user})
    //console.log("usuario editado", user);
  }
  handleLogout = () => {
    let {user} = this.state;
    user = {}
    Logout(this.props.history);
    this.setState({user})
  };
  componentWillMount(){
    let user = JSON.parse(localStorage.getItem("user"));
    user ? this.setState({user}) : this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <Router
        state={this.state}
        handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
        handleChange={this.handleChange}
        handleEditUser={this.handleEditUser}
        handleLogout={this.handleLogout}/>
      </div>
    );
  }
}

export default withRouter(App);
