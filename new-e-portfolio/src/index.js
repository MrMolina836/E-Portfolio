import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes,  Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
        <BrowserRouter basename="/E-Portfolio">
                <Routes>
                        <Route path="*" element={<App />}> </Route>
                </Routes>
        </BrowserRouter>
</React.StrictMode> 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();