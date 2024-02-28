import React from "react";
import { AppRoutes } from "./routes";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(setUser(JSON.parse(localStorage.getItem("authData"))));
  dispatch(setToken(JSON.parse(localStorage.getItem("token"))))
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
