// import React from 'react';
// import { Route, Routes, Navigate, useLocation } from "react-router-dom"
// import { useContext } from "react";
// import AuthContext from "../../store/auth/auth-contex-provider";

// // import Login from "./screens/auth/login/login"
// // import Register from "./screens/auth/register/register"
// import Dashboard from "./screens/dashboard/dashboard"






// const  App = () => {
//   return (
//     <Dashboard />
//   )
  
// }

// export default App

/* new testing */
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
// import AuthContext from "./store/auth/AuthContextProvider";
import AuthContext from "./store/auth/auth-contex-provider";
// import Resource from "./components/resource/Resource";
import Resource from "./components/resource/resource";
import Auth from "./components/auth/auth";
import "./App.css";




function App() {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  return (
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={authState.authenticated ? location.pathname : "/user/login"}
            />
          }
        />
        {!authState.authenticated && (
          <Route path="user">
            <Route path="register" element={<Auth />} />
            <Route path="login" element={<Auth />} />
          </Route>
        )}
        {authState.authenticated && (
          <Route path="resource" element={<Resource />} />
        )}
      </Routes>
  );
}

export default App;
