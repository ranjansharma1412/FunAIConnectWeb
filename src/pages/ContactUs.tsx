import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get in Touch</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                {/* Contact Info */}
                <div>
                    <h2>Contact Information</h2>
                    <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
                        Have a question or just want to say hi? We'd love to hear from you.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'var(--card-bg)', padding: '0.8rem', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                                <Mail size={24} color="var(--primary-color)" />
                            </div>
                            <div>
                                <h4 style={{ margin: 0 }}>Email</h4>
                                <a href="mailto:support@funaiconnect.com" style={{ color: 'var(--text-color)', opacity: 0.8 }}>support@funaiconnect.com</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'var(--card-bg)', padding: '0.8rem', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                                <Phone size={24} color="var(--primary-color)" />
                            </div>
                            <div>
                                <h4 style={{ margin: 0 }}>Phone</h4>
                                <span style={{ opacity: 0.8 }}>+1 (555) 123-4567</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'var(--card-bg)', padding: '0.8rem', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                                <MapPin size={24} color="var(--primary-color)" />
                            </div>
                            <div>
                                <h4 style={{ margin: 0 }}>Address</h4>
                                <span style={{ opacity: 0.8 }}>123 AI Street, Tech City, TC 90210</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="card">
                    <h3 style={{ marginTop: 0 }}>Send us a Message</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                style={{
                                    padding: '0.8rem',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your@email.com"
                                style={{
                                    padding: '0.8rem',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="How can we help?"
                                style={{
                                    padding: '0.8rem',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                    width: '100%',
                                    fontFamily: 'inherit',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>

                        <button type="submit" style={{
                            marginTop: '1rem',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
