import React from 'react';
import {Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/Sign_Up/SignUp';
import Profile from './components/Profile/Profile';
import FormEdit from './components/FormEditUser/FormEdit'

const Router = ({state, handleLogin, handleChange, handleSignup, handleEditUser, handleLogout}) => (
        <Switch>
            <Route exact path='/' render={(props) => (
          <Login handleLogin={handleLogin} state={state} handleChange={handleChange} {...props} />)} />
            <Route exact path='/registro' render={(props) => (
          <SignUp handleSignup={handleSignup} state={state} handleChange={handleChange} {...props} />)} />
          <Route exact path='/profile/:id' render={(props) => (
          <Profile handleChange={handleChange} handleLogout={handleLogout} state={state} {...props} />)} />
          <Route exact path='/edit/:id' render={(props) => (
          <FormEdit handleEditUser={handleEditUser} handleChange={handleChange} state={state} {...props} />)} />
        </Switch>
    );

export default Router;