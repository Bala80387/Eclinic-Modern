
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavbarLink } from './types';

interface DesktopNavigationProps {
  navbarLinks: NavbarLink[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navbarLinks,
  activeDropdown,
  toggleDropdown,
}) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-8">
        {navbarLinks.map((link) =>
          link.dropdown ? (
            <div key={link.name} className="relative group">
              <button
                onClick={() => toggleDropdown(link.name)}
                className={cn(
                  'flex items-center text-gray-700 hover:text-eclinic-600 transition-colors px-2 py-1 text-sm font-medium',
                  activeDropdown === link.name && 'text-eclinic-600'
                )}
              >
                {link.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={cn(
                  'absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-right',
                  activeDropdown === link.name
                    ? 'transform scale-100 opacity-100'
                    : 'transform scale-95 opacity-0 pointer-events-none'
                )}
              >
                {link.items?.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => toggleDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-eclinic-600 transition-colors px-2 py-1 text-sm font-medium"
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default DesktopNavigation;
