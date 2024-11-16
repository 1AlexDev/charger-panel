'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TailSpin } from 'react-loading-icons';
import ChargerCard from '../../(components)/ChargerCard';

export default function HomePage() {
  const router = useRouter();
  const [chargers, setChargers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/chargers')
      .then((res) => res.json())
      .then((data) => {
        setChargers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">Charger Manager</h1>
      {loading ? (
        <div className='flex justify-center items-center'>
          <TailSpin stroke="#3b82f6" speed={1.5}/>
        </div>
      ) : (
        <div className="space-y-4">
          {chargers.map((charger) => (
            <ChargerCard key={charger.id} charger={charger} />
          ))}
        </div>
      )}
      <button
        onClick={() => router.push('/home/sign-in')}
        className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 mt-6 block mx-auto"
      >
        Sign In
      </button>
    </div>
  );
}