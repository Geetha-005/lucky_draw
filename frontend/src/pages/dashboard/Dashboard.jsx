

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
            </li>
            <li>
              {/* The "to" prop should be relative to the parent route path, e.g., "/dashboard/users" */}
              <Link to="users" className="block p-2 rounded hover:bg-gray-700">Users Section</Link>
            </li>
            <li>
              <Link to="tokens" className="block p-2 rounded hover:bg-gray-700">Tokens Section</Link>
            </li>
            <li>
              <Link to="payments" className="block p-2 rounded hover:bg-gray-700">Payment Section</Link>
            </li>
           
            <li>
              <Link to="contest-details" className="block p-2 rounded hover:bg-gray-700">Contest Details</Link>
            </li>

             <li>
              <Link to="gallery" className="block p-2 rounded hover:bg-gray-700">gallery Uplaod</Link>
            </li>
             <li>
              <Link to="settings" className="block p-2 rounded hover:bg-gray-700">Settings Section</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={logout}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;