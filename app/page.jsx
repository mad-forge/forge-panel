import Link from 'next/link';

export default function Home(){
  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          🔥 Forge Panel
        </h1>
        <p className="text-xl text-gray-700 mb-2">
          Your Personal Developer Control Panel
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Manage projects, tasks, and ideas — all in one place
        </p>
        <Link
        href="/dashboard"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg inline-block transition shadow-lg hover:shadow-xl"
        >
          Launch Dashboard →
        </Link>
      </div>
    </div>
  )
}