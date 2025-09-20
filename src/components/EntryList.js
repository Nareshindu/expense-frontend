import React from "react";

function EntryList({ entries = [], onDelete }) {
  return (
<table style={{ width: "100%", borderCollapse: "collapse" }}>
  <thead>
    <tr style={{ backgroundColor: "#2c3e50", color: "white" }}>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Type</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Description</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Amount</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {entries.length > 0 ? (
      entries.map((entry) => (
        <tr key={entry.id}>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{entry.date}</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{entry.type}</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{entry.description}</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{entry.amount}</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>
            <button onClick={() => onDelete(entry.id)}
                    style={{ padding: "5px 10px", backgroundColor: "#c0392b", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="5" style={{ textAlign: "center", padding: "10px", border: "1px solid #ddd" }}>No entries found</td>
      </tr>
    )}
  </tbody>
</table>

  );
}

export default EntryList;
