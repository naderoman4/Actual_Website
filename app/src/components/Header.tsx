'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/engagement', label: 'Engagement' },
  { href: '/partenariats', label: 'Partenariats Sportifs' },
  { href: '/champions-club', label: 'Actual Champions Club' },
  { href: '/voile', label: 'Voile Team Actual' },
  { href: '/media', label: 'Média' },
  { href: '/actualites', label: 'Actualités' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-actual-dark/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-actual-red rounded-sm flex items-center justify-center">
            <span className="text-white font-black text-lg">A</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Actual Sport</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.actualgroup.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-actual-red hover:text-red-400 text-sm font-semibold transition-colors"
          >
            Actual Group ↗
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-actual-dark border-t border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white text-sm font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
