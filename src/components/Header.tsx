import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const isActive = (path: string) => {
        return location.pathname === path ? 'var(--primary-color)' : 'var(--text-color)';
    };

    const navLinkStyle = (path: string) => ({
        color: isActive(path),
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '1rem',
        cursor: 'pointer'
    });

    return (
        <header style={{
            backgroundColor: 'var(--header-bg)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)' }}>
                    <span>FunAIConnect</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={navLinkStyle('/')}>Home</Link>
                    <Link to="/privacy" style={navLinkStyle('/privacy')}>Privacy Policy</Link>
                    <Link to="/terms" style={navLinkStyle('/terms')}>Terms</Link>
                    <Link to="/contact" style={navLinkStyle('/contact')}>Contact Us</Link>

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-color)'
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', marginRight: '1rem', color: 'var(--text-color)' }}>
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={toggleMenu} style={{ background: 'transparent', border: 'none', color: 'var(--text-color)' }}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--header-bg)',
                    borderBottom: '1px solid var(--border-color)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <Link to="/" style={navLinkStyle('/')} onClick={toggleMenu}>Home</Link>
                    <Link to="/privacy" style={navLinkStyle('/privacy')} onClick={toggleMenu}>Privacy Policy</Link>
                    <Link to="/terms" style={navLinkStyle('/terms')} onClick={toggleMenu}>Terms</Link>
                    <Link to="/contact" style={navLinkStyle('/contact')} onClick={toggleMenu}>Contact Us</Link>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
