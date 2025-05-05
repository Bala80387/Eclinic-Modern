
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import NavbarLogo from './navbar/NavbarLogo';
import DesktopNavigation from './navbar/DesktopNavigation';
import ContactInfo from './navbar/ContactInfo';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileNavigation from './navbar/MobileNavigation';
import ThemeToggle from './navbar/ThemeToggle';
import { NavbarLink } from './navbar/types';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const navbarLinks: NavbarLink[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '#',
      dropdown: true,
      items: [
        { name: 'Dental Care', path: '/dental' },
        { name: 'Cardiology', path: '/cardiology' },
        { name: 'ENT', path: '/ent' },
        { name: 'Emergency', path: '/emergency' },
        { name: 'Neurologist', path: '/neurologist' },
        { name: 'Orthopedic', path: '/orthopedic' },
        { name: 'Dermatology', path: '/dermatology' },
        { name: 'Gastroenterology', path: '/gastroenterology' },
      ],
    },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Medicine', path: '/medicine' },
    { name: 'Ambulance', path: '/ambulance' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Navigation */}
          <DesktopNavigation
            navbarLinks={navbarLinks}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link 
              to="/medicine" 
              className="text-gray-600 hover:text-eclinic-600 dark:text-gray-300 dark:hover:text-eclinic-400 transition-colors"
              aria-label="Shop Medicines"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <ContactInfo />
          </div>

          {/* Mobile menu button */}
          <MobileMenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <MobileNavigation
        isMobileMenuOpen={isMobileMenuOpen}
        navbarLinks={navbarLinks}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
