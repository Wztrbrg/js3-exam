import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/authService";
import "../style/loginPage.css";

/*
startsida, loggar man in används useNavigate till att 
navigera till bookPage där rätt komponent renderas beroende på vilken 
roll man loggar in som, finns länk till registerPage 
*/
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
      setLoginMessage("Invalid username and/or password");
    }
  };

  return (
    <>
      <section className="login-wrapper">
        <section className="left-side">
          <header className="login-page-header">
            <h1 className="login-page-heading">Booksters website</h1>
          </header>
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
            <p className="register-para">
              No account yet? Sing up <Link to="/register">here!</Link>
            </p>
            {loginMessage && <p className="login-message">{loginMessage}</p>}
            <section className="btn-container">
              <button
                data-testid="login-btn"
                className="login-btn"
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
        <div className="right-side"></div>
      </section>
    </>
  );
}

export default LoginPage;
