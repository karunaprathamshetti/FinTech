import { useState } from "react";
import { useApp } from "../context/AppContext";

function Dashboard() {
  const { addProject, activities } = useApp();

  const [form, setForm] = useState({
    name: "",
    amount: "",
    desc: "",
  });

  const handleCreate = () => {
    if (!form.name || !form.amount) return;
    addProject(form);
    setForm({ name: "", amount: "", desc: "" });
  };

  return (
    <div className="container">
      <h1 className="logo">TrustPay</h1>

      <div className="form-card">
        <input
          placeholder="Project"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />

        <button onClick={handleCreate}>Secure Payment</button>
      </div>

      <div className="activity">
        <h3>Activity</h3>
        {activities.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;