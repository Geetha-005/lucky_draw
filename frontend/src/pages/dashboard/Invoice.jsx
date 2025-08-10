// src/components/Invoice.js
import React from 'react';

const Invoice = React.forwardRef(({ payment }, ref) => {
  if (!payment) return null;

  return (
    <div ref={ref} className="p-8 bg-white border border-gray-300 rounded shadow-lg" style={{ width: '210mm', minHeight: '297mm', margin: 'auto' }}>
      <h2 className="text-2xl font-bold mb-4 text-center">Invoice</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <p><strong>Invoice for:</strong> {payment.user_name}</p>
          <p><strong>Token Number:</strong> {payment.token_number}</p>
        </div>
        <div className="text-right">
          <p><strong>Payment Date:</strong> {payment.payment_date}</p>
          <p><strong>Payment Ref:</strong> {payment.payment_ref}</p>
        </div>
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Description</th>
            <th className="py-2 px-4 border-b text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Service for Token {payment.token_number}</td>
            <td className="py-2 px-4 border-b text-right">${payment.amount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-right mt-4">
        <p className="text-xl font-bold">Total: ${payment.amount.toFixed(2)}</p>
      </div>
    </div>
  );
});

export default Invoice;