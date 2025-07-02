import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../src/app/globals.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Listening Sessions', href: '/listening-sessions' },
  { name: 'Mental Health Awareness', href: '/mental-health-awareness' },
  { name: 'Get Involved', href: '/get-involved' },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center px-8 py-4">
      {/* Logo (left) */}
      <div className="flex-none">
        <Link href="/" aria-label="Home" tabIndex={0} className="focus:outline-none">
          <img src="https://placehold.co/60x60?text=Logo" alt="Logo" className="rounded-lg border-4 border-white w-16 h-16" />
        </Link>
      </div>
      {/* Nav links (center) */}
      <ul className="flex-1 flex justify-center gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = router.pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  `relative text-white text-lg font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-white
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:h-0.5 after:w-full after:bg-white after:rounded after:transition-transform after:duration-300 after:origin-left
                  ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 focus:after:scale-x-100'}
                  `
                }
                aria-label={link.name}
                tabIndex={0}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Donate button (right) */}
      <div className="flex-none">
        <Link
          href="/donate"
          aria-label="Donate"
          tabIndex={0}
          className="font-semibold px-6 py-2 rounded-full shadow transform transition-transform transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 hover:shadow-lg hover:bg-indigo-700 active:scale-95"
          style={{ backgroundColor: '#6d79e6', color: 'white', fontFamily: 'Inter, sans-serif' }}
        >
          Donate
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 