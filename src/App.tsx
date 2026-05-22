import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import TaskBoard from './components/TaskBoard';
import AddTaskModal from './components/AddTaskModal';
import type { Task } from './types';

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Pesquisa de UX', description: 'Coletar referências de design', status: 'done', priority: 'medium', createdAt: Date.now() - 100000 },
  { id: '2', title: 'Setup do Projeto', description: 'Inicializar React e Vite', status: 'in-progress', priority: 'high', createdAt: Date.now() - 50000 },
  { id: '3', title: 'Implementar dnd-kit', description: 'Adicionar funcionalidade de drag and drop nas colunas.', status: 'todo', priority: 'high', createdAt: Date.now() },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (newTask: Task) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        <Header onAddTaskClick={() => setIsModalOpen(true)} />
        <main>
          <TaskBoard tasks={tasks} setTasks={setTasks} />
        </main>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <AddTaskModal
            onClose={() => setIsModalOpen(false)}
            onAddTask={handleAddTask}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

