import { useApp } from "../context/AppContext";

function Disputes() {
  const { disputes } = useApp();

  return (
    <div className="container">
      <h1>Disputes</h1>

      {disputes.map((d, i) => (
        <div className="card" key={i}>
          Dispute raised for {d.name}
        </div>
      ))}
    </div>
  );
}

export default Disputes;