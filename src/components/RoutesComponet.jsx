import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import Signup from '../views/signup';
import Login from '../views/Login';

import App from '../views/App';
// import Login from '../views/auths/Login';
// dotenv.config();
const RoutesProvider = () => {
  return (
      <React.StrictMode>
          {/* <ToastContainer /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
      </React.StrictMode>
  );
};
export default RoutesProvider;
// eslint-disable-next-line prettier/prettier