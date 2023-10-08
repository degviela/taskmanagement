import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  App,
  Insert
} from "./components"
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
        <Route path="/" element={ <App/>}/>
        <Route path="/Insert" element={ <Insert/>}/>
    </Routes>
  </Router>
);