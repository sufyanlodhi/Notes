import React from 'react';


const Login = () => {
  return (
    <div className="parent_main_coontainer">
      <div className="main_container">
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter your details.</p>

        {/* Email input */}
        <label className="lbmail" htmlFor="mail">Email</label>
        <input
          className="inemail"
          type="text"
          name="email"
          id="mail"
          placeholder="Email"
        />

        {/* Password input */}
        <label className="lbpass" htmlFor="password">Password</label>
        <input
          className="inpass"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        {/* Forgot Password link */}
        <a href="#">Forgot Password?</a>

        {/* Login button */}
        <input
          className="loginbtn"
          type="button"
          value="Login"
          onClick={() => alert('Login clicked')}
        />

        {/* Google Sign up button */}
        <input
          className="googlebtn"
          type="button"
          value="Sign up with Google"
          onClick={() => alert('Google signup clicked')}
        />
      </div>
    </div>
  );
};

export default Login;
