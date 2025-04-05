import React, { useState } from "react";

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form onSubmit={(e) => { submitHandler(e) }}
          className="login-form">
          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <input value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email" placeholder="Enter your email" />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input  value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }} type="password" placeholder="Enter your password" />
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">Login</button>
        </form>

        {/* Register Link */}
        <p className="register-text">
          Don't have an account?
          <a href="#" className="register-link"> Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
