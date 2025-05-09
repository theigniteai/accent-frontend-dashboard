import React from "react";

const Billing = () => {
  const invoices = [
    { id: "INV-001", amount: "$49", date: "2024-04-01", status: "Paid" },
    { id: "INV-002", amount: "$49", date: "2024-05-01", status: "Paid" }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Billing</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Invoice History</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Invoice ID</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t">
                <td className="py-2">{invoice.id}</td>
                <td className="py-2">{invoice.amount}</td>
                <td className="py-2">{invoice.date}</td>
                <td className="py-2">
                  <span className="text-green-600 font-semibold">{invoice.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;