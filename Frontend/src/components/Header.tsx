import { Link, NavLink } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const activeLinkStyle = {
    color: '#FF69B4',
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ShieldCheck className="h-8 w-8 text-[#FF69B4]" />
          <span className="text-2xl font-bold tracking-tight">RightsRadar</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" end className="hover:text-[#FF69B4] transition-colors" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            Home
          </NavLink>
          <NavLink to="/map" className="hover:text-[#FF69B4] transition-colors" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            Legal Gap Map
          </NavLink>
          <NavLink to="/platforms" className="hover:text-[#FF69B4] transition-colors" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            Platform Safety
          </NavLink>
          <NavLink to="/timeline" className="hover:text-[#FF69B4] transition-colors" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
            She Persists
          </NavLink>
        </nav>
        <Link to="/report">
          <Button className="bg-[#FF69B4] text-white hover:bg-[#E05A9A]">Generate Report</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;