// // src/components/UsersSection.js

// import React from 'react';
// import DashboardContent from './DashboardContent';

// const users = [
//   { id: 1, name: 'John Doe', email: 'john.doe@example.com', registered: '2023-01-15' },
//   { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', registered: '2023-02-20' },
//   { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', registered: '2023-03-10' },
// ];

// const UsersSection = () => (
//   <DashboardContent title="Users Section">
//     <p className="mb-4">Here is a list of all registered users in a tabular format.</p>
//     <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//       <thead className="bg-gray-100">
//         <tr>
//           <th className="py-2 px-4 border-b text-left">Name</th>
//           <th className="py-2 px-4 border-b text-left">Email</th>
//           <th className="py-2 px-4 border-b text-left">Registered Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(user => (
//           <tr key={user.id} className="border-b hover:bg-gray-50">
//             <td className="py-2 px-4">{user.name}</td>
//             <td className="py-2 px-4">{user.email}</td>
//             <td className="py-2 px-4">{user.registered}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </DashboardContent>
// );

// export default UsersSection;


// src/components/UsersSection.js

import React, { useState } from 'react';
import DashboardContent from './DashboardContent';

// Static initial user data
const initialUsers = [
  { id: 1, s_no: 1, name: 'John Doe', dob: '1990-01-15', email: 'john.doe@example.com', contact: '123-456-7890', address: '123 Main St, Anytown', token_number: 'TKN-001', purchased_date: '2023-01-15', payment_ref: 'PAY-001', payment_date: '2023-01-15' },
  { id: 2, s_no: 2, name: 'Jane Smith', dob: '1992-02-20', email: 'jane.smith@example.com', contact: '098-765-4321', address: '456 Oak Ave, Somewhere', token_number: 'TKN-002', purchased_date: '2023-02-20', payment_ref: 'PAY-002', payment_date: '2023-02-20' },
  { id: 3, s_no: 3, name: 'Peter Jones', dob: '1985-03-10', email: 'peter.jones@example.com', contact: '111-222-3333', address: '789 Pine Ln, Nowhere', token_number: 'TKN-003', purchased_date: '2023-03-10', payment_ref: 'PAY-003', payment_date: '2023-03-10' },
  { id: 4, s_no: 4, name: 'Mary Johnson', dob: '1995-04-25', email: 'mary.johnson@example.com', contact: '444-555-6666', address: '101 Maple Rd, Cityland', token_number: 'TKN-004', purchased_date: '2023-04-25', payment_ref: 'PAY-004', payment_date: '2023-04-25' },
  { id: 5, s_no: 5, name: 'Robert Brown', dob: '1988-05-30', email: 'robert.brown@example.com', contact: '777-888-9999', address: '202 Birch St, Villagetown', token_number: 'TKN-005', purchased_date: '2023-05-30', payment_ref: 'PAY-005', payment_date: '2023-05-30' },
  { id: 6, s_no: 6, name: 'Linda Davis', dob: '1991-06-05', email: 'linda.davis@example.com', contact: '123-123-1234', address: '303 Cedar Ave, Metropolis', token_number: 'TKN-006', purchased_date: '2023-06-05', payment_ref: 'PAY-006', payment_date: '2023-06-05' },
  { id: 7, s_no: 7, name: 'James Wilson', dob: '1987-07-18', email: 'james.wilson@example.com', contact: '456-456-4567', address: '404 Walnut Blvd, Suburbia', token_number: 'TKN-007', purchased_date: '2023-07-18', payment_ref: 'PAY-007', payment_date: '2023-07-18' },
  { id: 8, s_no: 8, name: 'Patricia Miller', dob: '1993-08-22', email: 'patricia.miller@example.com', contact: '789-789-7890', address: '505 Pinetree Dr, Countryside', token_number: 'TKN-008', purchased_date: '2023-08-22', payment_ref: 'PAY-008', payment_date: '2023-08-22' },
  { id: 9, s_no: 9, name: 'Michael Taylor', dob: '1989-09-01', email: 'michael.taylor@example.com', contact: '112-233-4455', address: '606 Spruce Ct, Bayside', token_number: 'TKN-009', purchased_date: '2023-09-01', payment_ref: 'PAY-009', payment_date: '2023-09-01' },
  { id: 10, s_no: 10, name: 'Jennifer White', dob: '1994-10-10', email: 'jennifer.white@example.com', contact: '334-455-6677', address: '707 Redwood Pl, Hilltop', token_number: 'TKN-010', purchased_date: '2023-10-10', payment_ref: 'PAY-010', payment_date: '2023-10-10' },
];

const UsersSection = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);

  // Handle input changes in the edit form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  // Save the edited user data
  const handleSave = () => {
    setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
    setEditingUser(null);
  };

  // Delete a user record
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // Render the edit form
  if (editingUser) {
    return (
      <DashboardContent title="Edit User">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editingUser.name}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editingUser.email}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={editingUser.dob}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={editingUser.contact}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="mb-1 font-semibold">Address</label>
                <input
                  type="text"
                  name="address"
                  value={editingUser.address}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Save Changes
              </button>
              <button type="button" onClick={() => setEditingUser(null)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </DashboardContent>
    );
  }

  // Render the view details modal
  if (viewingUser) {
    return (
      <DashboardContent title="User Details">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><strong>Name:</strong> {viewingUser.name}</p>
            <p><strong>S.No:</strong> {viewingUser.s_no}</p>
            <p><strong>Email:</strong> {viewingUser.email}</p>
            <p><strong>Date of Birth:</strong> {viewingUser.dob}</p>
            <p><strong>Contact:</strong> {viewingUser.contact}</p>
            <p><strong>Address:</strong> {viewingUser.address}</p>
            <p><strong>Token Number:</strong> {viewingUser.token_number}</p>
            <p><strong>Purchased Date:</strong> {viewingUser.purchased_date}</p>
            <p><strong>Payment Ref:</strong> {viewingUser.payment_ref}</p>
            <p><strong>Payment Date:</strong> {viewingUser.payment_date}</p>
          </div>
          <button onClick={() => setViewingUser(null)} className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Close
          </button>
        </div>
      </DashboardContent>
    );
  }

  // Default view: list of users
  return (
    <DashboardContent title="Users Section">
      <p className="mb-4">Here is a list of all registered users. Use the action buttons to view, edit, or delete records.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">S.No</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Contact</th>
              <th className="py-2 px-4 border-b text-left">Token Number</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{user.s_no}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.contact}</td>
                <td className="py-2 px-4">{user.token_number}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button onClick={() => setViewingUser(user)} className="text-blue-500 hover:text-blue-700">View</button>
                  <button onClick={() => setEditingUser(user)} className="text-yellow-500 hover:text-yellow-700">Edit</button>
                  <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardContent>
  );
};

export default UsersSection;