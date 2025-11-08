import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

// ServiceCard component for the services dropdown
const ServiceCard = ({ title, description, to, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className="navbar__service-card"
  >
    <h4 className="navbar__service-card-title">{title}</h4>
    {description && <p className="navbar__service-card-description">{description}</p>}
  </NavLink>
);

const Header = () => {
  const [open, setOpen] = useState(false); // services dropdown (desktop)
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // services submenu (mobile)
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close dropdown on Escape and outside click
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => {
      // When mobile menu is open, do not apply desktop outside-click logic
      if (mobileOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    
    // Handle scroll for navbar
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, mobileOpen]);

  // Close mobile services submenu when mobile menu closes
  useEffect(() => {
    if (!mobileOpen && mobileServicesOpen) {
      setMobileServicesOpen(false);
    }
  }, [mobileOpen, mobileServicesOpen]);

  // Close mobile menu and submenu on route change
  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
    if (mobileServicesOpen) setMobileServicesOpen(false);
  }, [location.pathname]);

  // Custom NavLink component with active class
  const CustomNavLink = ({ to, children, className = '', ...props }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `navbar__link ${isActive ? 'navbar__link--active' : ''} ${className}`
      }
      {...props}
    >
      {children}
    </NavLink>
  );

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <img src="/assets/img/logo.png" alt="Henderson Electrical Services" className="navbar__logo-img" />
          <span className="navbar__logo-text navbar__logo-text--long">Henderson Electrical Services</span>
          <span className="navbar__logo-text navbar__logo-text--short">HES</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="navbar__nav">
          <CustomNavLink to="/about">About</CustomNavLink>
          
          {/* Services Dropdown */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setOpen(!open)}
              className={`navbar__link ${open ? 'navbar__link--active' : ''}`}
            >
              Services
              <span className="ml-1 text-xs" aria-hidden>▼</span>
            </button>
            
            {open && (
              <div className="navbar__dropdown absolute left-0 mt-1 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-10">
                <div className="grid gap-1 p-2">
                  <ServiceCard 
                    to="/domestic"
                    title="Domestic Services"
                    description="For homes and flats"
                    onClick={() => setOpen(false)}
                  />
                  <ServiceCard 
                    to="/commercial"
                    title="Commercial Services"
                    description="For businesses and offices"
                    onClick={() => setOpen(false)}
                  />
                  <ServiceCard 
                    to="/landlords"
                    title="Landlord Services"
                    description="For property owners"
                    onClick={() => setOpen(false)}
                  />
                  <div className="px-4 py-2">
                    <NavLink 
                      to="/services" 
                      className="navbar__service-card text-center text-blue-600 hover:text-blue-800 text-sm font-medium mt-1"
                      onClick={() => setOpen(false)}
                    >
                      View all services →
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
          <CustomNavLink to="/eicr">EICR</CustomNavLink>
          <CustomNavLink to="/contact">Contact</CustomNavLink>
          <NavLink 
            to="/get-a-quote" 
            className="navbar__link navbar__link--cta ml-2"
          >
            Get a Quote
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="navbar__mobile-button md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`} onMouseDown={(e) => e.stopPropagation()}>
        <nav className="space-y-1 px-2 pt-2 pb-3">
          <CustomNavLink 
            to="/about" 
            className="block"
            onClick={() => setMobileOpen(false)}
          >
            About
          </CustomNavLink>
          
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="navbar__link w-full text-left flex justify-between items-center"
            >
              Services
              <span className="ml-2 text-xs">{mobileServicesOpen ? '▲' : '▼'}</span>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <NavLink 
                  to="/domestic" 
                  className="navbar__link block"
                  onClick={() => {
                    setMobileServicesOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  Domestic Services
                </NavLink>
                <NavLink 
                  to="/commercial" 
                  className="navbar__link block"
                  onClick={() => {
                    setMobileServicesOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  Commercial Services
                </NavLink>
                <NavLink 
                  to="/landlords" 
                  className="navbar__link block"
                  onClick={() => {
                    setMobileServicesOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  Landlord Services
                </NavLink>
              </div>
            )}
          </div>
          
          <CustomNavLink 
            to="/eicr" 
            className="block"
            onClick={() => setMobileOpen(false)}
          >
            EIRC
          </CustomNavLink>

          <CustomNavLink 
            to="/contact" 
            className="block"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </CustomNavLink>
          <NavLink 
            to="/get-a-quote" 
            className="navbar__link navbar__link--cta block mt-2 text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
