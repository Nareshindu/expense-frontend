import React from "react";

function Report({ report }) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f1f1f1" }}>
        <h2 style={{ color: "#34495e" }}>Report</h2>
        <p><strong>Income:</strong> {report.income}</p>
        <p><strong>Expense:</strong> {report.expense}</p>
        <p><strong>Balance:</strong> {report.balance}</p>
    </div>

  );
}

export default Report;
