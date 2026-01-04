import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Syllabus', path: '/syllabus' },
    { label: 'Notice', path: '/notice' },
    { label: 'Student Zone', path: '/student-zone' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Legal Documents', path: '/legal-documents' },
    { label: 'Accounts', path: '/accounts' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Menu */}
        <ul className={`
          lg:flex lg:items-center lg:justify-center lg:gap-8
          ${isMenuOpen ? 'flex' : 'hidden'}
          flex-col lg:flex-row gap-4 lg:gap-8
        `}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
            >
              <Link
                to={item.path}
                className="text-white hover:text-orange-500 transition-colors duration-200 text-sm font-medium block py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
