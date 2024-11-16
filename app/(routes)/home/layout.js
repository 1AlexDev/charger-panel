export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">Charger Manager</h1>
        </header>
        <main className="p-6">{children}</main> {/* This is crucial */}
      </body>
    </html>
  );
}