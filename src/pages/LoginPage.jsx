import React from "react";

const LoginPage = () => {
  return (
    <div className="m-5 rounded-xl">
      <div className="flex justify-center">
        <h2 className="text-center font-extrabold border-[1.5px] px-4 rounded-md border-slate-500 bg-lc-#B4D0CA">
          LOGIN PAGE
        </h2>
      </div>
      <form action="/login" method="POST">
        <div className="h-64 bg-lc-#B4D0CA w-96 m-2  shadow-lg rounded-xl p-4">
          <div className="flex flex-col">
            <label for="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="rounded-xl px-2 my-2"
              name="username"
            />
          </div>
          <div className="flex flex-col">
            <label for="Password">
              <b>Password</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="rounded-xl px-2 my-2"
              name="password"
            />
            <div className="flex justify-center">
              <button
                className="border-2 w-20 rounded-lg mt-2 font-bold"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
