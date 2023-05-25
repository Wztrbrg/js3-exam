import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginHandler from "../service/authService";

function RegisterPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");

  const submitHandler = async (e) => {
    const result = await loginHandler(e, credentials);
    if (result === true) {
      setTimeout(() => navigate("/books"), 1000);
      setLoginMessage("Logged in successfully!");
    } else {
      setLoginMessage(result);
    }
  };

  return (
    <section className="login-wrapper">
      <form data-testid="login-form" className="login-form">
        <div className="login-header">
          <h2 className="login-heading">Login</h2>
        </div>
        <div className="login-field-container">
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
        <div className="login-field-container">
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

        {loginMessage && <p className="login-message">{loginMessage}</p>}

        <p>
          Already have an account? Sing in <Link to="..">here!</Link>
        </p>
        <button
          data-testid="register-btn"
          type="submit"
          onClick={submitHandler}>
          Sign In
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
