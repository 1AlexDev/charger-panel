import Link from 'next/link';

export default function MainPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Charger Manager</h1>
      <p className="mt-4 text-gray-700">Easily sign in and out chargers with our app.</p>
      <Link href="/home">
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Go to Home
        </button>
      </Link>
    </div>
  );
}