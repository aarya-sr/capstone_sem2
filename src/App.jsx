
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./pages/Quiz";
import Evaluation from "./pages/Evaluation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quizes" element={<Quiz />} />
        <Route path="/evaluation" element={<Evaluation />} />
      </Routes>
    </Router>
  );
};

export default App;
