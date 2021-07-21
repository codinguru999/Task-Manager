import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${email} \n 
            password: ${password} \n 
            You can replace this alert with your process`);
  };

  return (
    <div className="container my-3">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label  className="form-label" htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label  className="form-label" htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <button type="submit" disabled={!email || !password} className="btn btn-sm btn-success" >
        <Link  to="/"> Login </Link>
       
      </button>
    </form>
    </div>
  );
}