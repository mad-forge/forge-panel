import Header from '@/components/Header';
import TaskList from '@/components/TaskList';

export default function Tasks() {
  // Dummy data - later ye state/database se aayega
  const tasks = [
    { id: 1, title: 'Build forge-panel UI', status: 'done' },
    { id: 2, title: 'Learn React basics', status: 'in-progress' },
    { id: 3, title: 'Add auth system', status: 'todo' },
    { id: 4, title: 'Create projects page', status: 'done' },
    { id: 5, title: 'Ship something real', status: 'in-progress' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tasks & Experiments</h2>
          
          <TaskList tasks={tasks} />
        </div>
      </main>
    </div>
  );
}
