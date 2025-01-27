import logo from './logo.svg';
import './index.css';
import React, { useState, useEffect, Box } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Assets from './Pages/Assets/Assets';

//import UsersPage from './Components/Users';




function App() {
  return (
    <div>
    <Helmet>
      <meta name="theme-color" content="#673AAC" />
    </Helmet>
    <Router>

      <Routes>
      <Route path="/home" element={<Homepage/>}/>
        <Route path="/assets" element={<Assets/>}/>
        <Route path="/" element={<Navigate to="/home" replace={true} />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
