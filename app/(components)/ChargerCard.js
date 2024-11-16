'use client';

import { useRouter } from 'next/navigation';

export default function ChargerCard({ charger }) {
  const router = useRouter();

  const handleSignOutRedirect = () => {
    if (!charger.signedOutBy) {
      router.push(`/home/sign-out/${charger.id}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center">
        <span className="font-medium text-black">{charger.name}</span>
        <button
          onClick={handleSignOutRedirect}
          className={`px-4 py-2 rounded-lg ${
            charger.signedOutBy
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={!!charger.signedOutBy}
        >
          {charger.signedOutBy ? 'Signed Out' : 'Sign Out'}
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Status: {charger.signedOutBy ? `Signed Out by ${charger.signedOutBy}` : 'Available'}
      </p>
    </div>
  );
}