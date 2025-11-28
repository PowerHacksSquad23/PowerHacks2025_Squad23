import { Link, NavLink } from 'react-router-dom';
import { ShieldCheck, Menu, X, UserCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const activeLinkStyle = {
    color: '#FF69B4',
    fontWeight: 'bold',
  };

  return (
    <header className="bg-gray-900 text-white shadow-md border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <ShieldCheck className="h-8 w-8 text-[#FF69B4]" />
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            RightsRadar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" end className="hover:text-[#FF69B4] transition-colors text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            Home
          </NavLink>
          <NavLink to="/map" className="hover:text-[#FF69B4] transition-colors text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            Legal Gap Map
          </NavLink>
          <NavLink to="/platforms" className="hover:text-[#FF69B4] transition-colors text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            Platform Safety
          </NavLink>
          {/* Renamed to reflect the new combined page */}
          <NavLink to="/report" className="hover:text-[#FF69B4] transition-colors text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            Toolkit
          </NavLink>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
            <UserCircle className="h-5 w-5" />
            Admin Login
          </Link>
          <Link to="/report">
            <Button className="bg-[#FF69B4] text-white hover:bg-[#E05A9A] font-bold shadow-lg shadow-pink-500/20">
              Access Toolkit
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900 p-4 space-y-4 animate-in slide-in-from-top-2">
          <Link to="/" className="block text-gray-300 hover:text-[#FF69B4]" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/map" className="block text-gray-300 hover:text-[#FF69B4]" onClick={() => setIsMenuOpen(false)}>Legal Map</Link>
          <Link to="/platforms" className="block text-gray-300 hover:text-[#FF69B4]" onClick={() => setIsMenuOpen(false)}>Platform Safety</Link>
          <Link to="/report" className="block text-gray-300 hover:text-[#FF69B4]" onClick={() => setIsMenuOpen(false)}>Toolkit</Link>
          <hr className="border-gray-800 my-2" />
          <Link to="/login" className="flex items-center gap-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            <UserCircle className="h-5 w-5" /> Admin Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;