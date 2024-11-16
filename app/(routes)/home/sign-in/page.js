'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const router = useRouter();
  const [chargers, setChargers] = useState([]);

  useEffect(() => {
    fetch('/api/chargers')
      .then((res) => res.json())
      .then((data) => setChargers(data.filter((charger) => charger.signedOutBy)));
  }, []);

  const handleSignIn = async (chargerId) => {
    const res = await fetch('/api/chargers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chargerId, userName: null }),
    });

    if (res.ok) {
      alert('Charger signed in successfully!');
      router.push('/home')
    } else {
      alert('Failed to sign in charger.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-black">Sign In Charger</h1>
      <div className="space-y-4">
        {chargers.map((charger) => (
          <div key={charger.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <span className="font-medium text-gray-800">{charger.name}</span>
            <button
              onClick={() => handleSignIn(charger.id)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Sign In
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}