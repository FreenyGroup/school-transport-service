// components/FormSelector.jsx
'use client';
import { useState } from 'react';

export default function FormSelector({ onSelectForm }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelectForm(event.target.value); // Pass the selected value to the parent
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="formType"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Select Form Type:
      </label>
      <select
        id="formType"
        value={selectedOption}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">-- Choose a Form --</option>
        <option value="district-public">
          School District / Public School
        </option>
        <option value="charter">
          Charter School / Charter Managment Organization
        </option>
        <option value="private">Private School</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
