import React, { useContext, createContext, useEffect, useState } from "react";
import axios, { axiosPrivate } from "../api/axios.js";

const AuthContext = createContext(null);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within a useAuthContext");
  }
  return context;
}

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState("");
  const [user, setUser] = useState({});

  const [authResolved, setAuthResolved] = useState(false);

  useEffect(() => {
    async function attemptRefresh() {
      try {
        const refRes = await axios.get(
          "https://motul-backend.vercel.app/api/users/refresh",
          {
            withCredentials: true,
          }
        );

        if (refRes.status === 200) {
          axiosPrivate.defaults.headers.common[
            "Authorization"
          ] = `BEARER ${refRes.data.accessToken}`;

          console.log(`access token refreshed ${refRes.data.accessToken}`);
          setAuth(refRes.data.accessToken);
          setAuthResolved(true);
        }
      } catch (error) {
        console.log("ref token invalid", error);
        setAuthResolved(true);
      }
    }

    if (auth == "") {
      attemptRefresh();
    } else {
      setAuthResolved(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, user, setUser, authResolved }}
    >
      {children}
    </AuthContext.Provider>
  );
}
