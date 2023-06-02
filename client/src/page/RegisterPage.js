import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/authService";
import "../style/registerPage.css";

/*
Registreringssida, om man registrerar sig navigeras man tillbaka till LoginPage där man sedan 
kan logga in med sina uppgifter
*/
function RegisterPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [registerMessage, setRegisterMessage] = useState("");

  const submitHandler = async (e) => {
    const result = await authService.registerHandler(e, credentials);

    if (result === true) {
      setTimeout(() => navigate(-1), 1000);
      setRegisterMessage("Account successfully created!");
    } else {
      setRegisterMessage("Username taken, try again");
    }
  };

  return (
    <>
      <section className="register-wrapper">
        <section className="left-side">
          <header className="register-page-header">
            <h1 className="register-page-heading">Booksters website</h1>
          </header>
          <form data-testid="register-form" className="register-form">
            <div className="register-header">
              <h2 className="register-heading">Register new user</h2>
            </div>
            <div className="register-field-container">
              <label>Username</label>
              <input
                type="text"
                placeholder="Insert username..."
                data-testid="username-field"
                name="username"
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
            <div className="register-field-container">
              <label>Password</label>
              <input
                type="password"
                placeholder="Insert password..."
                data-testid="password-field"
                name="password"
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            {registerMessage && (
              <p className="register-message">{registerMessage}</p>
            )}
            <p className="login-para">
              Already have an account? Sing in <Link to="/">here!</Link>
            </p>
            <button
              className="register-btn"
              data-testid="register-btn"
              type="submit"
              onClick={submitHandler}>
              Register new account
            </button>
          </form>
        </section>
        <div className="right-side"></div>
      </section>
    </>
  );
}

export default RegisterPage;
