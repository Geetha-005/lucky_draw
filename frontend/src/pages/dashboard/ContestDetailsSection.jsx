// src/components/ContestDetailsSection.js

import React from 'react';
import DashboardContent from './DashboardContent';

const ContestDetailsSection = () => (
  <DashboardContent title="Contest Details Section">
    <p className="mb-4">Manage and add new contests here.</p>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contest-name">
          Contest Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contest-name" type="text" placeholder="e.g., Summer Coding Challenge" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contest-date">
          Date
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contest-date" type="date" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contest-description">
          Description
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contest-description" rows="4" placeholder="Briefly describe the contest rules and prizes."></textarea>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add Contest
      </button>
    </form>
  </DashboardContent>
);

export default ContestDetailsSection;