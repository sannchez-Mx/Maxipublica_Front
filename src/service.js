import axios from "axios";
import UIkit from "uikit";

const base_url =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://simplekitchen.herokuapp.com";

export const Signup = (user, history) => {
  axios
    .post(`${base_url}/auth/registro`, user)
    .then(res => {
      //console.log("===>", res.data);
      UIkit.notification({
        message: res.data.msg,
        status: "success",
        pos: "top-center",
        timeout: 2000
      });
      history.push("/");
    })
    .catch(err => {
      UIkit.notification({
        message: err,
        status: "warning",
        pos: "top-center",
        timeout: 2000
      });
    });
};

export const loginService = (user, history) => {
  axios
    .post(`${base_url}/auth/login`, user)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      let { _id } = res.data.user;
      UIkit.notification({
        message: res.data.msg,
        status: "success",
        pos: "top-center",
        timeout: 2000
      });
      window.location.reload()
      history.push(`/profile/${_id}`);
    })
    .catch(err => {
      //console.log("Error login =====> ", err);
      UIkit.notification({
        message: err.response.data.msg,
        status: "danger",
        pos: "top-center",
        timeout: 2000
      });
    });
};

export const editUser = (user, id, history) => {
  const token = localStorage.getItem("token");
  axios
    .put(`${base_url}/profile/edit/${id}`, user, {
      headers: {
        "x-access-token": token
      }
    })
    .then(res => {
      UIkit.notification({
        message: res.data.msg,
        status: "success",
        pos: "top-center",
        timeout: 2000
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      history.push(`/profile/${id}`);
    })
    .catch(err => {
      //console.log("Error actualizar =====> ", err.response);
      UIkit.notification({
        message: err.response.data.msg,
        status: "danger",
        pos: "top-center",
        timeout: 2000
      });
    });
};

export const isLoggedIn = history => {
  const token = localStorage.getItem("token");
  axios
    .get(`${base_url}/auth/loggedin`, {
      headers: {
        "x-access-token": token
      }
    })
    .then(res => {
      UIkit.notification({
        message: res.data.msg,
        status: "success",
        pos: "top-center",
        timeout: 2000
      });
    })
    .catch(err => {
      UIkit.notification({
        message: err.response.data.msg,
        status: "warning",
        pos: "top-center",
        timeout: 2000
      });
      localStorage.clear();
      //history.push("/");
    });
};

export const Logout = history => {
  localStorage.clear();
  UIkit.notification({
    message: "Nos vemos luego",
    status: "primary",
    pos: "top-center",
    timeout: 2000
  });
  window.history.back();
};