import React, { useEffect, useState } from "react";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import Report from "./components/Report";
import API from "./services/api";

function App() {
  const [entries, setEntries] = useState([]);
  const [report, setReport] = useState({ income: 0, expense: 0, balance: 0 });

  const fetchEntries = async () => {
    const res = await API.get("/entries");
    setEntries(res.data);
  };

  const fetchReport = async () => {
    const res = await API.get("/entries/report");
    setReport(res.data);
  };

  useEffect(() => {
    fetchEntries();
    fetchReport();
  }, []);

  const handleAdd = async (entry) => {
    await API.post("/entries", entry);
    fetchEntries();
    fetchReport();
  };

  const handleDelete = async (id) => {
    await API.delete(`/entries/${id}`);
    fetchEntries();
    fetchReport();
  };
return (
  <div style={{ maxWidth: "800px", margin: "30px auto", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Welcome to Expense Tracker</h1>

    <div style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <EntryForm onAdd={handleAdd} />
    </div>

    <div style={{ marginBottom: "30px" }}>
      <EntryList entries={entries} onDelete={handleDelete} />
    </div>

    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f1f1f1" }}>
      <Report report={report} />
    </div>
  </div>
);

}
export default App;
