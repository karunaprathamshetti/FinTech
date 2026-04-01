import { useApp } from "../context/AppContext";

function Transactions() {
  const { transactions } = useApp();

  return (
    <div className="container">
      <h1>Transactions</h1>

      {transactions.map((t, i) => (
        <div className="card" key={i}>
          ₹ {t.amount} released for {t.name}
        </div>
      ))}
    </div>
  );
}

export default Transactions;