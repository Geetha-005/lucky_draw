import React from 'react';
import DashboardContent from './DashboardContent';

const payments = [
  { id: 1, userId: 'user123', amount: 50.00, date: '2025-08-10', status: 'Completed' },
  { id: 2, userId: 'user456', amount: 25.50, date: '2025-08-09', status: 'Pending' },
  { id: 3, userId: 'user789', amount: 100.00, date: '2025-08-08', status: 'Completed' },
];

const PaymentSection = () => (
  <DashboardContent title="Payment Section">
    <p className="mb-4">This section shows a list of all payments.</p>
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border-b text-left">Payment ID</th>
          <th className="py-2 px-4 border-b text-left">User ID</th>
          <th className="py-2 px-4 border-b text-left">Amount</th>
          <th className="py-2 px-4 border-b text-left">Date</th>
          <th className="py-2 px-4 border-b text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {payments.map(payment => (
          <tr key={payment.id} className="border-b hover:bg-gray-50">
            <td className="py-2 px-4">{payment.id}</td>
            <td className="py-2 px-4">{payment.userId}</td>
            <td className="py-2 px-4">${payment.amount.toFixed(2)}</td>
            <td className="py-2 px-4">{payment.date}</td>
            <td className="py-2 px-4">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full
                ${payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {payment.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </DashboardContent>
);

export default PaymentSection;