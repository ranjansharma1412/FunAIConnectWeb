import { legalContent } from '../data/legalContent';

const Terms = () => {
    const { title, lastUpdatedPrefix, sections } = legalContent.terms;

    return (
        <div className="terms-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>{title}</h1>
            <p style={{ opacity: 0.7 }}>{lastUpdatedPrefix}{new Date().toLocaleDateString()}</p>

            {sections.map((section, index) => (
                <section key={index} style={{ marginTop: '2rem' }}>
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                    {section.list && (
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            {section.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </div>
    );
};

export default Terms;
