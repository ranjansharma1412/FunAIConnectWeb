import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--footer-bg)',
            borderTop: '1px solid var(--border-color)',
            padding: '2rem 0',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div>
                    &copy; {new Date().getFullYear()} FunAIConnect. All rights reserved.
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/privacy" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Privacy Policy</Link>
                    <Link to="/terms" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Terms of Service</Link>
                    <Link to="/contact" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
