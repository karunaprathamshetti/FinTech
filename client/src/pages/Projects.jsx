import { useApp } from "../context/AppContext";

function Projects() {
  const { projects, releasePayment, raiseDispute } = useApp();

  return (
    <div className="container">
      <h1>Projects</h1>

      {projects.map((p, i) => (
        <div className="card" key={i}>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
          <p>₹ {p.amount}</p>

          <button onClick={() => releasePayment(p)}>
            Release Payment
          </button>

          <button onClick={() => raiseDispute(p)}>
            Raise Dispute
          </button>
        </div>
      ))}
    </div>
  );
}

export default Projects;