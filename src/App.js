import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import SignUp from './Pages/SignUp';
import Login from "./Pages/Login"

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/signUp" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Navigate to="/signUp"/>} />
    </Routes>
  </div>
  );
};

export default App;
