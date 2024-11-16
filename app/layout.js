import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PWA Manifest Link */}
        <link rel="manifest" href="/manifest.json" />
        {/* Add icons for PWA */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icon-512x512.png"
        />
        {/* Meta tags for PWA */}
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white p-6 shadow-md">
          <h1 className="text-3xl font-bold">Charger Manager</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}