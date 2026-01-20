import Link from 'next/link';

export default function Home(){
  return(
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
        Forge Panel
        </h1>
        <p className="text-xl text-slate-300 mb-8">
        Your personal developer dashboard for ideas and tasks
        </p>
        <Link
        href="/dashboard"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg inline-block transition"
        >
        Go To Dashboard 
        </Link>
      </div>
    </div>
  )
}