import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// import Login from "./screens/auth/login/login"
// import Register from "./screens/auth/register/register"
import Dashboard from "./screens/dashboard/dashboard"






const  App:React.FC = () => {
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  )
  
}

export default App
