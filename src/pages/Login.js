import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../redux/features/user/usersSlice";
import { HOME_ROUTE } from "../route/routes";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.users);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };
  if (isLoggedIn) return <Navigate to={HOME_ROUTE} />;
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      {error && <h6 className="error">{error}</h6>}
      <h5>login</h5>
      <div className="form-row">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="username"
          className="form-input"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="button button-block">
        login
      </button>
    </form>
  );
}
