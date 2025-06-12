import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className="bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between">
          <h1 className="text-xl font-bold">mObywatel+ (Demo)</h1>
          <div className="space-x-4">
            <Link to="/">Moje dane</Link>
            <Link to="/documents">Dokumenty</Link>
            <Link to="/settings">Ustawienia</Link>
            <Link to="/history">Historia</Link>
          </div>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
