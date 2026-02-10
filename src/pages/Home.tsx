import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-container">
            <section style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #646cff, #535bf2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Welcome to FunAIConnect
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-color)', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                    The next generation social media app powered by AI. Connect, share, and experience the future of social networking.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button style={{
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '1.1rem',
                        padding: '0.8rem 1.5rem'
                    }}>
                        Get Started <ArrowRight size={20} />
                    </button>
                    <button style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
                        Learn More
                    </button>
                </div>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                <div className="card">
                    <h3>Privacy First</h3>
                    <p>We value your privacy above all else. Check out our policies to see how we protect your data.</p>
                    <Link to="/privacy">Read Policy &rarr;</Link>
                </div>
                <div className="card">
                    <h3>Transparent Terms</h3>
                    <p>No hidden clauses. Our terms of service are clear, concise, and fair to all users.</p>
                    <Link to="/terms">View Terms &rarr;</Link>
                </div>
                <div className="card">
                    <h3>24/7 Support</h3>
                    <p>Need help? Our team is always ready to assist you with any questions or issues.</p>
                    <Link to="/contact">Contact Us &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
