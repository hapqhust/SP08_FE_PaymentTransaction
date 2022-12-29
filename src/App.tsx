import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import PaymentAdminPage from './page/PaymentAdminPage';
import PaymentPage from './page/PaymentPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaymentPage />}></Route>
          <Route path="/admin" element={<PaymentAdminPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
