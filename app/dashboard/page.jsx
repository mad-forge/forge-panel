import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import TaskList from '@/components/TaskList';

export default function Dashboard() {
  // Dummy data - later ye dynamic hoga
  const stats = [
    { title: 'Total Projects', value: '3', icon: '📦', color: 'blue' },
    { title: 'Active Tasks', value: '5', icon: '⚡', color: 'yellow' },
    { title: 'Completed', value: '12', icon: '✓', color: 'green' },
    { title: 'In Progress', value: '2', icon: '🔨', color: 'purple' }
  ];

  const recentTasks = [
    { id: 1, title: 'Build forge-panel UI', status: 'done' },
    { id: 2, title: 'Learn React basics', status: 'in-progress' },
    { id: 3, title: 'Ship something real', status: 'todo' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>

          {/* Recent Tasks */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Tasks</h3>
            <TaskList tasks={recentTasks} />
          </div>
        </div>
      </main>
    </div>
  );
}
