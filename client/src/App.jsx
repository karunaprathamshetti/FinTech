import { useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [milestone, setMilestone] = useState("");

  const calculateTrust = (project) => {
    let score = 40;
    if (project.description) score += 20;
    if (project.milestones?.length > 0) score += 20;

    const released = project.milestones.filter(
      (m) => m.status === "Released ✅"
    ).length;

    if (released > 0) score += 20;

    return score;
  };

  const addProject = () => {
    if (!name || !amount || !desc || !milestone) return;

    const newProject = {
      id: Date.now(),
      name,
      description: desc,
      milestones: [
        {
          title: milestone,
          amount,
          status: "Locked 🔒"
        }
      ]
    };

    setProjects([newProject, ...projects]);
    setName("");
    setAmount("");
    setDesc("");
    setMilestone("");
  };

  const releaseMilestone = (projectId, index) => {
    const updated = projects.map((p) => {
      if (p.id === projectId) {
        const newMilestones = [...p.milestones];
        newMilestones[index].status = "Released ✅";
        return { ...p, milestones: newMilestones };
      }
      return p;
    });

    setProjects(updated);
  };

  return (
    <div className="app">
      <div className="container">

        {/* HERO */}
        <div className="hero">
          <h1>TrustPay</h1>
          <p>
            Secure payments. Transparent workflows. Zero payment disputes.
          </p>

          <div className="hero-stats">
            <div>
              <h2>₹ 0</h2>
              <span>Total Secured</span>
            </div>
            <div>
              <h2>{projects.length}</h2>
              <span>Active Escrows</span>
            </div>
            <div>
              <h2>
                {projects.filter(p =>
                  p.milestones.some(m => m.status === "Released ✅")
                ).length}
              </h2>
              <span>Completed</span>
            </div>
          </div>
        </div>

        {/* FORM */}
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

            <input
              placeholder="Milestone (Design / Dev)"
              value={milestone}
              onChange={(e) => setMilestone(e.target.value)}
            />

            <button onClick={addProject}>
              Secure Payment 🔒
            </button>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="projects">
          {projects.map((p) => (
            <div className="project-card" key={p.id}>
              <h3>{p.name}</h3>

              <p className="desc">{p.description}</p>

              <p className="trust-score">
                Trust Score: {calculateTrust(p)}%
              </p>

              {/* 🔥 TIMELINE */}
              <div className="timeline">
                <span className="active">Funded</span>
                <span>→</span>
                <span className="active">In Progress</span>
                <span>→</span>
                <span className={
                  p.milestones.some(m => m.status === "Released ✅")
                    ? "active"
                    : ""
                }>
                  Released
                </span>
              </div>

              {p.milestones.map((m, i) => (
                <div key={i} className="milestone">
                  <span>{m.title} - ₹{m.amount}</span>

                  <span className={
                    m.status === "Released ✅" ? "green" : "yellow"
                  }>
                    {m.status}
                  </span>

                  {m.status !== "Released ✅" && (
                    <button onClick={() => releaseMilestone(p.id, i)}>
                      Release 💸
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* EMPTY */}
        {projects.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "40px", color: "#64748b" }}>
            No escrow projects yet. Create one to get started 🚀
          </p>
        )}

      </div>
    </div>
  );
}

export default App;