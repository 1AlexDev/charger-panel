'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignOutPage({ params }) {
  const router = useRouter();
  const { id } = params; // Dynamic parameter from the route

  const users = ['Ethan', 'Laila', 'Chelly'];
  const [selectedUser, setSelectedUser] = useState('');

  const handleSignOut = async () => {
    if (!selectedUser) {
      alert('Please select a user!');
      return;
    }

    const res = await fetch('/api/chargers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chargerId: parseInt(id), userName: selectedUser }),
    });

    if (res.ok) {
      alert(`Charger signed out by ${selectedUser} successfully!`);
      router.push('/home'); // Redirect back to home
    } else {
      alert('Failed to sign out charger.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-black">Sign Out Charger</h1>
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-800">Select User:</label>
        <select
          className="w-full border px-4 py-2 rounded text-black"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">-- Select a User --</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSignOut}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Confirm Sign Out
      </button>
    </div>
  );
}