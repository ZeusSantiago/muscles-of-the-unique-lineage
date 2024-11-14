import React from "react";

const LoginPage = () => {
  return (
    <div className="m-5 rounded-xl">
      <h2 className="text-center font-extrabold">LOGIN PAGE</h2>
      <div className="flex flex-col">
        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col">
        <label for="Password">
          <b>Password</b>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default LoginPage;
