import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/authService";
import "../style/loginPage.css";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");

  const submitHandler = async (e) => {
    const result = await authService.loginHandler(e, credentials);
    if (result === true) {
      setTimeout(() => navigate("/books"), 1000);
      setLoginMessage("Logged in successfully!");
    } else {
      setLoginMessage(result);
    }
  };

  return (
    <>
      <header className="login-page-header">
        <h1 className="login-page-heading">Booksters website</h1>
      </header>
      <section className="login-wrapper">
        <form
          data-testid="login-form"
          className="login-form"
          autoComplete="off">
          <section className="login-header">
            <h2 className="login-heading">Login</h2>
          </section>
          <section className="login-field-container">
            <label>Username</label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Insert username..."
              data-testid="username-field"
              name="username"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </section>
          <section className="login-field-container">
            <label>Password</label>
            <input
              autoComplete="off"
              type="password"
              placeholder="Insert password..."
              data-testid="password-field"
              name="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </section>
          {loginMessage && <p className="login-message">{loginMessage}</p>}
          <p className="register-para">
            No account yet? Sing up <Link to="/register">here!</Link>
          </p>
          <section className="btn-container">
            <button
              data-testid="login-btn"
              classname="login-btn"
              type="submit"
              onClick={submitHandler}>
              Sign In
            </button>
            <Link to="books" data-testid="guest-btn" className="guest-btn">
              Proceed as guest user
            </Link>
          </section>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
