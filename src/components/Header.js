import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

// ServiceCard component for the services dropdown (simplified without images)
const ServiceCard = ({ title, description, to, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className="block px-4 py-3 rounded-md hover:bg-blue-50 group transition-colors duration-150"
  >
    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">{title}</h4>
    {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}
  </NavLink>
);

const Header = () => {
  const [open, setOpen] = useState(false); // services dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const menuRef = useRef(null);

  // Close dropdown on Escape and outside click
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);
  // Custom NavLink component with active class
  const CustomNavLink = ({ to, children, className = '', ...props }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `px-4 py-2 rounded-md transition-colors duration-200 ${
          isActive 
            ? 'text-white bg-blue-600 hover:bg-blue-700' 
            : 'text-gray-700 hover:bg-gray-100'
        } ${className}`
      }
      {...props}
    >
      {children}
    </NavLink>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity">
              <span className="text-yellow-400 text-2xl mr-2" aria-hidden>⚡</span>
              <span className="text-xl font-bold text-gray-900">Henderson Electrical Services</span>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
            <CustomNavLink to="/domestic">Domestic</CustomNavLink>
            <CustomNavLink to="/commercial">Commercial</CustomNavLink>
            <CustomNavLink to="/landlords">Landlords</CustomNavLink>
            
            {/* Services Dropdown - Full Width */}
            <div className="relative" ref={menuRef}>
              <div className="relative group">
                <button
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center"
                  onClick={() => setOpen(!open)}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !open) {
                      e.preventDefault();
                      setOpen(true);
                    }
                    if (e.key === 'Escape') setOpen(false);
                  }}
                  onMouseEnter={() => setOpen(true)}
                  aria-expanded={open}
                  aria-haspopup="true"
                >
                  Services
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Full-width dropdown panel */}
                {open && (
                  <div 
                    className="fixed left-0 right-0 mt-2 bg-white shadow-lg z-50 border-t border-gray-100"
                    role="menu"
                    onMouseLeave={() => setOpen(false)}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Residential Services */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Residential Services</h3>
                          <div className="space-y-2">
                            <ServiceCard 
                              title="Lighting & Fixtures"
                              description="LED upgrades, smart lighting, and more"
                              to="/service/lighting"
                              onClick={() => setOpen(false)}
                            />
                            <ServiceCard 
                              title="Sockets & Switches"
                              description="Installation and upgrades"
                              to="/service/sockets"
                              onClick={() => setOpen(false)}
                            />
                            <ServiceCard 
                              title="Consumer Units"
                              description="Fuse box upgrades and replacements"
                              to="/service/consumer-unit"
                              onClick={() => setOpen(false)}
                            />
                          </div>
                        </div>
                        
                        {/* Testing & Safety */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Testing & Safety</h3>
                          <div className="space-y-2">
                            <ServiceCard 
                              title="EICR Testing"
                              description="Electrical safety inspections"
                              to="/eicr"
                              onClick={() => setOpen(false)}
                            />
                            <ServiceCard 
                              title="PAT Testing"
                              description="Portable appliance testing"
                              to="/service/pat-testing"
                              onClick={() => setOpen(false)}
                            />
                            <ServiceCard 
                              title="Fault Finding"
                              description="Diagnose and fix electrical issues"
                              to="/service/fault-finding"
                              onClick={() => setOpen(false)}
                            />
                          </div>
                        </div>
                        
                        {/* Commercial & Business */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Commercial</h3>
                          <div className="space-y-2">
                            <ServiceCard 
                              title="Business Solutions"
                              description="Complete electrical services for businesses"
                              to="/commercial"
                              onClick={() => setOpen(false)}
                            />
                            <ServiceCard 
                              title="Landlord Services"
                              description="Compliance and safety for rental properties"
                              to="/landlords"
                              onClick={() => setOpen(false)}
                            />
                            <ServiceCard 
                              title="EV Chargers"
                              description="Installation and maintenance"
                              to="/service/ev-chargers"
                              onClick={() => setOpen(false)}
                            />
                          </div>
                        </div>
                        
                        {/* View All Services & Support */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">All Services</h3>
                            <a 
                              href="/services" 
                              className="block w-full text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors duration-200"
                              onClick={() => setOpen(false)}
                            >
                              View All Services
                            </a>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Need help choosing a service?</h4>
                            <p className="text-sm text-gray-600 mb-4">Our experts are here to help you find the right solution for your needs.</p>
                            <a 
                              href="/contact" 
                              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                              onClick={() => setOpen(false)}
                            >
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <CustomNavLink to="/eicr">EICR</CustomNavLink>
            <CustomNavLink to="/get-a-quote" className="ml-2 bg-blue-600 text-white hover:bg-blue-700">Get a Quote</CustomNavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <CustomNavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileOpen(false)}>Home</CustomNavLink>
            <CustomNavLink to="/domestic" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileOpen(false)}>Domestic</CustomNavLink>
            <CustomNavLink to="/commercial" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileOpen(false)}>Commercial</CustomNavLink>
            <CustomNavLink to="/landlords" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileOpen(false)}>Landlords</CustomNavLink>
            <CustomNavLink to="/eicr" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileOpen(false)}>EICR</CustomNavLink>
            <CustomNavLink to="/services" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileOpen(false)}>All Services</CustomNavLink>
            <CustomNavLink to="/get-a-quote" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700" onClick={() => setMobileOpen(false)}>Get a Quote</CustomNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
