import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function Header({ isMenuOpen, onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center px-6">
        <img src="/logo2.png" alt="Global Education Institute" className="h-16" style={{ height: '60.8px' }} />
        <button
          onClick={onMenuToggle}
          className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors -mr-4"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}
