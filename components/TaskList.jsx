import { CheckCircle2, Clock, Circle } from 'lucide-react';

export default function TaskList({ tasks }) {
  const getStatusIcon = (status) => {
      if (status === 'done') return CheckCircle2;
      if (status === 'in-progress') return Clock;
      return Circle;
  };

  const getStatusColor = (status) => {
    if (status === 'done') return 'text-green-600';
    if (status === 'in-progress') return 'text-yellow-600';
    return 'text-gray-400';
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <ul className="space-y-3">
              {tasks.map(task => {
                  const StatusIcon = getStatusIcon(task.status);
                  return (
                      <li
                          key={task.id}
                          className="flex items-center gap-3 p-3 rounded hover:bg-gray-50 transition"
                      >
                  <StatusIcon className={`w-5 h-5 ${getStatusColor(task.status)}`} />
                  <span className={task.status === 'done' ? 'line-through text-gray-400' : 'text-gray-900'}>
                      {task.title}
                  </span>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
