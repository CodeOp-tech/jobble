import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './Jobs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
