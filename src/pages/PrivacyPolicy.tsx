import { legalContent } from '../data/legalContent';

const PrivacyPolicy = () => {
    const { title, lastUpdatedPrefix, lastUpdatedDate, description, sections } = legalContent.privacy;

    return (
        <div className="policy-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>{title}</h1>
            <p style={{ opacity: 0.7 }}>{lastUpdatedPrefix}{lastUpdatedDate || new Date().toLocaleDateString()}</p>

            {description && (
                <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    {description}
                </p>
            )}

            {sections.map((section, index) => (
                <section key={index} style={{ marginTop: '2rem' }}>
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                    {section.list && (
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            {section.list.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </div>
    );
};

export default PrivacyPolicy;
