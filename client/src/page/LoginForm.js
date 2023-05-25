import { useState } from "react";

// const [formstate, setFormstate] = useState(false)

function LoginForm() {
  return (
    <>
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
            />
          </div>
          <div className="login-field-container">
            <label>Password</label>
            <input
              type="password"
              placeholder="Insert password..."
              data-testid="password-field"
              name="password"
            />
          </div>
          <p>
            No account yet? Sing up <a>here!</a>
          </p>
          <button data-testid="login-btn" type="submit">
            Sign In
          </button>
          <button data-testid="guest-btn" type="submit">
            Proceed as guest user
          </button>
        </form>
      </section>
    </>
  );
}

export default LoginForm;
