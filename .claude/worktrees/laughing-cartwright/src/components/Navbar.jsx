import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 bg-primary-950 bg-opacity-95 backdrop-blur-md z-50 border-b border-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-primary-500">
            JT
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              
                key={item.label}
                href={item.href}
                className="text-light-100 hover:text-primary-500 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            
              href="#contact"
              className="bg-primary-500 text-primary-950 px-6 py-2 rounded-lg font-semibold hover:bg-primary-400 transition-all"
            >
              Contáctame
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-primary-900">
            {navItems.map((item) => (
              
                key={item.label}
                href={item.href}
                className="block py-2 text-light-100 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
              href="#contact"
              className="block mt-3 bg-primary-500 text-primary-950 px-6 py-2 rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Contáctame
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
