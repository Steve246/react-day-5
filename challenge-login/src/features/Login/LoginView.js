import React, { Component, useEffect, useState } from "react";
import "../Login/Login.css";

import { useDeps } from "../../shared/DepsContext";

const LoginView = () => {
  // const [token, setToken] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const { loginService } = useDeps();

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleUserName = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
  };

  const handlePassword = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  // bikin satu fungsi buat get token terus masukin ke localstorage

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSubmitted(true);
    setLoading(true);

    try {
      if (values.username && values.password) {
        setValid(true);
        alert(`Username: ${values.username} Password: ${values.password}`);
        // alert("login berhasil");

        const response = await loginService.getToken();

        console.log("ini response", response.token);
        // setToken(response.token);

        window.localStorage.setItem("user", JSON.stringify(response));
      }
      setSubmitted(true);
    } catch (e) {
      // console.log(e);
      console.log("OOps....");
      // alert("login tidak berhasil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div class="success-message">Login Success!</div>
        ) : (
          <> </>
        )}

        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="User Name"
          name="firstName"
          value={values.username}
          onChange={handleUserName}
        />

        {submitted && !values.username && (
          <span id="name-error">Please enter a first name</span>
        )}

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="User Pasword"
          name="email"
          value={values.password}
          onChange={handlePassword}
        />

        {submitted && !values.password && (
          <span id="password-error">Please enter password</span>
        )}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginView;
