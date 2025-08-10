// src/components/TokensSection.js
import React, { useState } from 'react';
import DashboardContent from './DashboardContent';
import jsPDF from 'jspdf';

// Initial data with a new 'status' field and an 'id' for keying
const initialTokens = [
  { id: 1, token: 'abc123def456', user: 'John Doe', generated: '2025-08-01', expires: '2025-09-01', status: 'Draw not open' },
  { id: 2, token: 'ghi789jkl012', user: 'Jane Smith', generated: '2025-08-05', expires: '2025-10-05', status: 'Winner selected' },
  { id: 3, token: 'mno345pqr678', user: 'Peter Jones', generated: '2025-08-10', expires: '2025-11-10', status: 'Not selected' },
];

const TokensSection = () => {
  const [tokens, setTokens] = useState(initialTokens);

  // Function to regenerate a token
  const handleRegenerateToken = (id) => {
    // In a real application, you would make an API call to regenerate the token
    const newTokens = tokens.map(token => {
      if (token.id === id) {
        // Simple simulation of a new token and update date
        const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return { ...token, token: newToken, generated: new Date().toISOString().slice(0, 10), status: 'Draw not open' };
      }
      return token;
    });
    setTokens(newTokens);
  };

  // Function to generate a PDF of a single token's details
  const generateTokenPdf = (token) => {
    const doc = new jsPDF();
    doc.text(`Token Details`, 10, 10);
    doc.setFontSize(12);
    doc.text(`Token Number: ${token.token}`, 10, 20);
    doc.text(`User Name: ${token.user}`, 10, 30);
    doc.text(`Status: ${token.status}`, 10, 40);
    doc.text(`Generated On: ${token.generated}`, 10, 50);
    doc.text(`Expires On: ${token.expires}`, 10, 60);

    doc.save(`token_${token.token}.pdf`);
  };

  return (
    <DashboardContent title="Tokens Section">
      <p className="mb-4">This section shows a list of all generated tokens and allows you to manage them.</p>
      
      {/* Table for displaying tokens with new columns and buttons */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Token Number</th>
            <th className="py-2 px-4 border-b text-left">User</th>
            <th className="py-2 px-4 border-b text-left">Generated</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(token => (
            <tr key={token.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4 font-mono text-sm">{token.token}</td>
              <td className="py-2 px-4">{token.user}</td>
              <td className="py-2 px-4">{token.generated}</td>
              <td className="py-2 px-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full
                  ${token.status === 'Winner selected' ? 'bg-green-100 text-green-800' :
                    token.status === 'Not selected' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'}`}>
                  {token.status}
                </span>
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleRegenerateToken(token.id)}
                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 mr-2"
                >
                  Regenerate
                </button>
                <button
                  onClick={() => generateTokenPdf(token)}
                  className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                >
                  Generate PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardContent>
  );
};

export default TokensSection;