'use client';

import { Award, Briefcase, FolderGit2, GraduationCap, Home } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Home size={28} color="#000" />,
      bg: '#ffcbdb',
    },
    {
      name: 'Education & Skills',
      href: '/education',
      icon: <GraduationCap size={28} color="#000" />,
      bg: '#fbceb1',
    },
    {
      name: 'Experiences',
      href: '/experiences',
      icon: <Briefcase size={28} color="#000" />,
      bg: '#b1ddc9',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <FolderGit2 size={28} color="#000" />,
      bg: '#6cd0d0',
    },
    {
      name: 'Awards',
      href: '/awards',
      icon: <Award size={28} color="#000" />,
      bg: '#ffcbdb',
    },
  ];

  return (
    <nav className="w-full md:w-1/2 bg-white py-3 px-4 md:px-12 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-center gap-6 sm:gap-10">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative flex flex-col items-center group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              href={item.href}
              className="p-3 rounded-full transition-colors duration-500"
              style={{ backgroundColor: item.bg }}
            >
              {item.icon}
            </Link>

            {/* Always reserve space for label, but show/hide with opacity */}
            <span
              className={`absolute mt-12 text-xs sm:text-sm text-black font-medium transition-opacity duration-500 ${
                hovered === item.name ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
