import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Contracts from "./pages/Contracts";
import Disputes from "./pages/Disputes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h2>TrustPay</h2>

        <div>
          <Link to="/">Dashboard</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/contracts">Contracts</Link>
          <Link to="/disputes">Disputes</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/disputes" element={<Disputes />} />
      </Routes>
    </div>
  );
}

export default App;