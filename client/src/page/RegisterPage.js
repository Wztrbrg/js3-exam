import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/authService";

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
      setTimeout(() => navigate("/login"), 1000);
      setRegisterMessage("Account successfully created!");
    } else {
      setRegisterMessage(result);
    }
  };

  return (
    <section className="register-wrapper">
      <form data-testid="register-form" className="register-form">
        <div className="register-header">
          <h2 className="register-heading">Register</h2>
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

        <p>
          Already have an account? Sing in <Link to="/login">here!</Link>
        </p>
        <button
          data-testid="register-btn"
          type="submit"
          onClick={submitHandler}>
          Register
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
