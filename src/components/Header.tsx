import { Sparkles, Plus } from 'lucide-react';

interface HeaderProps {
  onAddTaskClick: () => void;
}

export default function Header({ onAddTaskClick }: HeaderProps) {
  return (
    <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 bg-primary/20 rounded-xl border border-primary/30">
            <Sparkles className="text-primary" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-slate-100">
            Nexus Task
          </h1>
        </div>
        <p className="text-slate-400">Gerencie suas tarefas!!</p>
      </div>

      <button
        onClick={onAddTaskClick}
        className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-xl font-medium transition-colors duration-200 shadow-sm"
      >
        <Plus size={20} />
        Nova Tarefa
      </button>
    </header>
  );
}
