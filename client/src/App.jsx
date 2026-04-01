import { useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const addProject = () => {
    if (!name || !amount || !desc) return;

    const newProject = {
      id: Date.now(),
      name,
      amount,
      description: desc,
      status: "In Escrow 🔒"
    };

    setProjects([newProject, ...projects]);
    setName("");
    setAmount("");
    setDesc("");
  };

  const releasePayment = (id) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, status: "Paid ✅" } : p
    );
    setProjects(updated);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <div className="navbar">
        <h1>💳 TrustPay</h1>
        <span>Secure Escrow Platform</span>
      </div>

      <div className="container">
        {/* Tagline */}
        <p className="tagline">
          Secure • Transparent • Hassle-Free Payments
        </p>

        {/* Form */}
        <div className="form-card">
          <h2>Create Escrow</h2>
          <div className="form">
            <input
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Amount ₹"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <input
              placeholder="Project Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <button onClick={addProject}>Create</button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-box">
            <p>Total Projects</p>
            <h2>{projects.length}</h2>
          </div>

          <div className="stat-box">
            <p>Payments Released</p>
            <h2>
              {projects.filter((p) => p.status === "Paid ✅").length}
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="projects">
          {projects.map((p) => (
            <div className="project-card" key={p.id}>
              <div className="project-top">
                <h3>{p.name}</h3>
                <span
                  className={
                    p.status === "Paid ✅" ? "green" : "yellow"
                  }
                >
                  {p.status}
                </span>
              </div>

              <p className="amount">₹ {p.amount}</p>
              <p className="desc">{p.description}</p>

              {p.status !== "Paid ✅" && (
                <button onClick={() => releasePayment(p.id)}>
                  Release Funds 💸
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;