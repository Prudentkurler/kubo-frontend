'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define dropdown menu structure
const navItems = [
  {
    label: 'Product',
    href: '/',
    dropdown: [
      { label: 'Technology', href: '/technology', description: 'AI-powered radiology platform' },
      { label: 'Features', href: '/#features', description: 'Core capabilities' },
      { label: 'Integrations', href: '/technology#integrations', description: 'Connect with your tools' },
      { label: 'Pricing', href: '/pricing', description: 'Transparent, fair pricing' },
      { label: 'Demo', href: '/demo', description: 'See KUBO in action' },
    ],
  },
  {
    label: 'Company',
    href: '/team',
    dropdown: [
      { label: 'About', href: '/team', description: 'Our mission and vision' },
      { label: 'Team', href: '/team', description: 'Meet the experts' },
      { label: 'News', href: '/news', description: 'Latest updates' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
    ],
  },
  {
    label: 'Resources',
    href: '/docs',
    dropdown: [
      { label: 'Documentation', href: '/docs', description: 'Technical guides' },
      { label: 'Research', href: '/research', description: 'Clinical studies' },
      { label: 'Blog', href: '/news', description: 'Articles and insights' },
      { label: 'Support', href: '/support', description: 'Get help' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown visibility
  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Delay closing to allow moving to dropdown
    setTimeout(() => {
      if (!isHoveringDropdown) {
        setActiveDropdown(null);
      }
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    setIsHoveringDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-black/60 backdrop-blur-md'
      )}
    >
      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 relative z-50">
            <div className="text-xl font-normal text-white">
              <span className="font-medium">Health</span>Tech4Africa
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <button
                    className={cn(
                      "px-4 py-2 text-white/80 hover:text-white transition-colors font-normal text-sm rounded-lg hover:bg-white/5",
                      activeDropdown === item.label && "text-white bg-white/5"
                    )}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-white/80 hover:text-white transition-colors font-normal text-sm rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block relative z-50">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-normal text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
            >
              Request Early Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white relative z-50"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown - Extension of Navbar */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-black/95 backdrop-blur-xl border-t border-white/10"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="container mx-auto px-4 lg:px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {navItems
                  .find((item) => item.label === activeDropdown)
                  ?.dropdown?.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="p-4 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10">
                        <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors mb-1">
                          {dropdownItem.label}
                        </div>
                        {dropdownItem.description && (
                          <div className="text-xs text-white/50 font-light">
                            {dropdownItem.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  {item.dropdown ? (
                    <>
                      <div className="text-white/60 text-xs uppercase tracking-wider font-medium mb-3">
                        {item.label}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block py-2 pl-4 border-l-2 border-white/10 hover:border-cyan-500 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="text-white/80 hover:text-white font-normal text-sm">
                            {dropdownItem.label}
                          </div>
                          {dropdownItem.description && (
                            <div className="text-white/40 text-xs mt-0.5">
                              {dropdownItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-white/80 hover:text-white transition-colors font-normal"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <a 
                href="/contact"
                className="block w-full text-center px-5 py-2.5 text-sm font-normal text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
