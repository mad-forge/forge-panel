import Header from '@/components/Header';

export default function Projects() {
  // Dummy data - later ye database se aayega
  const projects = [
    {
      id: 1,
      name: 'Forge Panel',
      status: 'Building',
      tech: 'Next.js, Tailwind',
      repo: 'https://github.com/yourusername/forge-panel'
    },
    {
      id: 2,
      name: 'Portfolio Site',
      status: 'Paused',
      tech: 'React, CSS',
      repo: null
    },
    {
      id: 3,
      name: 'AI Experiment',
      status: 'Done',
      tech: 'Python, OpenAI',
      repo: 'https://github.com/yourusername/ai-experiment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
          
          <div className="grid gap-4">
            {projects.map(project => (
              <div 
                key={project.id}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.tech}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Building' ? 'bg-blue-100 text-blue-700' :
                    project.status === 'Paused' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                {project.repo && (
                  <a 
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Repo →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
