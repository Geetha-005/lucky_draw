// src/components/SettingsSection.js

import React from 'react';
import DashboardContent from './DashboardContent';

const SettingsSection = () => (
  <DashboardContent title="Settings Section">
    <h4 className="text-xl font-semibold mb-4">Change Password</h4>
    <form className="mb-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="current-password">
          Current Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="current-password" type="password" placeholder="********" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
          New Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="new-password" type="password" placeholder="********" />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Update Password
      </button>
    </form>
    
    <h4 className="text-xl font-semibold mb-4">Add New Admin</h4>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin-email">
          Admin Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="admin-email" type="email" placeholder="admin@example.com" />
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add Admin
      </button>
    </form>
  </DashboardContent>
);

export default SettingsSection;