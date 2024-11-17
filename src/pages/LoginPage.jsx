import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContextProvider";
import axios, { axiosPrivate } from "../api/axios.js";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const { setAuth, auth, authResolved } = useAuthContext();
  const navigate = useNavigate();

  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });

  function formChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  async function loginUser(e) {
    e.preventDefault();
    if (formDetails.username != "" && formDetails.password != "") {
      try {
        const response = await axios.post(
          "api/users/login",
          JSON.stringify({
            username: formDetails.username,
            password: formDetails.password,
          }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        console.log(response.data);
        axiosPrivate.defaults.headers.common[
          "Authorization"
        ] = `BEARER ${response.data.accessToken}`;
        setAuth(response.data.accessToken);
        // navigate("/");
      } catch (error) {
        console.log(error.response?.data);
      }
    }
  }

  async function logoutUser(e) {
    try {
      const response = await axiosPrivate.get("api/users/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response.data);
      axiosPrivate.defaults.headers.common["Authorization"] = "";
      setAuth("");
      // navigate("/");
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <div className="m-5 rounded-xl flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <h2 className="text-center font-extrabold border-[1.5px] px-4 rounded-md border-slate-500 bg-lc-#B4D0CA">
          LOGIN PAGE {auth ? "meron" : "wala"}
        </h2>
      </div>
      <form className="h-64 bg-lc-#B4D0CA w-96 m-2  shadow-lg rounded-xl p-4 flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            className="rounded-xl px-2 my-2"
            required
            name="username"
            onChange={formChange}
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            className="rounded-xl px-2 my-2"
            required
            name="password"
            onChange={formChange}
            autoComplete="current-password"
          />
          <div className="flex justify-center">
            <button
              className="border-2 w-20 rounded-lg mt-2 font-bold"
              type="submit"
              onClick={loginUser}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <button onClick={logoutUser}> LOGOUT</button>
    </div>
  );
};

export default LoginPage;
