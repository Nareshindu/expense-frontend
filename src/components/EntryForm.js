import React, { useState } from "react";

function EntryForm({ onAdd }) {
  const [type, setType] = useState("Income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) return;
    onAdd({ type, description, amount: parseFloat(amount), date });
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
<form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
  <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}>
    <option value="Expense">Expense</option>
    <option value="Income">Income</option>
  </select>
  <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
         style={{ padding: "5px", flex: 1, borderRadius: "3px", border: "1px solid #ccc" }} required />
  <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}
         style={{ padding: "5px", width: "120px", borderRadius: "4px", border: "1px solid #ccc" }} required />
  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
         style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }} required />
  <button type="submit"
          style={{ padding: "6px 15px", backgroundColor: "#27ae60", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
    Add Entry
  </button>
</form>

  );
}

export default EntryForm;
