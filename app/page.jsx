import Link from 'next/link';
import { Flame, ArrowRight } from 'lucide-react';

export default function Home(){
  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Flame className="w-16 h-16 text-orange-500" />
          <h1 className="text-6xl font-bold text-gray-900">
            Forge Panel
          </h1>
        </div>
        <p className="text-xl text-gray-700 mb-2">
          Your Personal Developer Control Panel
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Manage projects, tasks, and ideas — all in one place
        </p>
        <Link
        href="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition shadow-lg hover:shadow-xl"
        >
          Launch Dashboard
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}