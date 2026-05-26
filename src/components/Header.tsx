import { Sparkles, Plus, Trash2 } from 'lucide-react';

interface HeaderProps {
  onAddTaskClick: () => void;
  onClearTasks: () => void;
}

export default function Header({ onAddTaskClick, onClearTasks }: HeaderProps) {
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

      <div className="flex items-center gap-3">
        <button
          onClick={onClearTasks}
          className="flex items-center justify-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 hover:border-rose-500/40 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 shadow-sm"
        >
          <Trash2 size={20} />
          Limpar Tarefas
        </button>
        <button
          onClick={onAddTaskClick}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-xl font-medium transition-colors duration-200 shadow-sm"
        >
          <Plus size={20} />
          Nova Tarefa
        </button>
      </div>
    </header>
  );
}
