import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
          🔥 Forge Panel
        </Link>
        
        <nav className="flex gap-6">
          <Link 
            href="/dashboard" 
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Dashboard
          </Link>
          <Link 
            href="/projects" 
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Projects
          </Link>
          <Link 
            href="/tasks" 
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Tasks
          </Link>
        </nav>
      </div>
    </header>
  );
}
