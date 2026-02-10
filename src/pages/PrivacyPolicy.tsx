const PrivacyPolicy = () => {
    return (
        <div className="policy-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Privacy Policy</h1>
            <p style={{ opacity: 0.7 }}>Last updated: {new Date().toLocaleDateString()}</p>

            <section style={{ marginTop: '2rem' }}>
                <h2>1. Introduction</h2>
                <p>
                    Welcome to FunAIConnect. We respect your privacy and are committed to protecting your personal data.
                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                </p>
            </section>

            <section style={{ marginTop: '2rem' }}>
                <h2>2. Data We Collect</h2>
                <p>
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>
            </section>

            <section style={{ marginTop: '2rem' }}>
                <h2>3. How We Use Your Data</h2>
                <p>
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
            </section>

            <section style={{ marginTop: '2rem' }}>
                <h2>4. Data Security</h2>
                <p>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
