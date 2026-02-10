const Terms = () => {
    return (
        <div className="terms-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Terms & Conditions</h1>
            <p style={{ opacity: 0.7 }}>Last updated: {new Date().toLocaleDateString()}</p>

            <section style={{ marginTop: '2rem' }}>
                <h2>1. Agreement to Terms</h2>
                <p>
                    By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                    If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
            </section>

            <section style={{ marginTop: '2rem' }}>
                <h2>2. Intellectual Property Rights</h2>
                <p>
                    Other than the content you own, under these Terms, FunAIConnect and/or its licensors own all the intellectual property rights and materials contained in this Website.
                </p>
            </section>

            <section style={{ marginTop: '2rem' }}>
                <h2>3. Restrictions</h2>
                <p>
                    You are specifically restricted from all of the following:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Publishing any Website material in any other media;</li>
                    <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                    <li>Publicly performing and/or showing any Website material;</li>
                    <li>Using this Website in any way that is or may be damaging to this Website;</li>
                    <li>Using this Website in any way that impacts user access to this Website;</li>
                </ul>
            </section>

            <section style={{ marginTop: '2rem' }}>
                <h2>4. Content Liability</h2>
                <p>
                    We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
                </p>
            </section>
        </div>
    );
};

export default Terms;
