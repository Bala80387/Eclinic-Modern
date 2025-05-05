
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavbarLink } from './types';

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  navbarLinks: NavbarLink[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isMobileMenuOpen,
  navbarLinks,
  activeDropdown,
  toggleDropdown,
  setIsMobileMenuOpen,
}) => {
  return (
    <div
      className={cn(
        'md:hidden transition-all duration-300 ease-in-out',
        isMobileMenuOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
        {navbarLinks.map((link) =>
          link.dropdown ? (
            <div key={link.name} className="space-y-1">
              <button
                onClick={() => toggleDropdown(link.name)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-eclinic-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === link.name && (
                <div className="pl-4 space-y-1">
                  {link.items?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block text-gray-600 hover:text-eclinic-600 hover:bg-gray-50 px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-eclinic-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          )
        )}
        <div className="pt-4 border-t border-gray-200 mt-4 flex flex-col space-y-3">
          <div className="flex items-center text-eclinic-600 px-3">
            <Phone className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">+91 98765 43210</span>
          </div>
          <Button
            className="bg-eclinic-600 hover:bg-eclinic-700 text-white mx-3"
            size="sm"
          >
            <Link to="/consultation">Consult Online</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
