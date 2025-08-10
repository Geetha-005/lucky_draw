// src/components/DashboardContent.js

import React from 'react';

const DashboardContent = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-3xl font-bold">{title}</h3>
    <div className="mt-4 text-gray-700">
      {children}
    </div>
  </div>
);

export default DashboardContent;

// import React from 'react';

// const DashboardContent = ({ title }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md">
//     <h3 className="text-3xl font-bold">{title}</h3>
//     <p className="mt-4 text-gray-700">Content for the {title.toLowerCase()} goes here.</p>
//   </div>
// );

// export const UsersSection = () => <DashboardContent title="Users Section" />;
// export const TokensSection = () => <DashboardContent title="Tokens Section" />;
// export const PaymentSection = () => <DashboardContent title="Payment Section" />;
// export const SettingsSection = () => <DashboardContent title="Settings Section" />;
// export const ContestDetailsSection = () => <DashboardContent title="Contest Details Section" />;