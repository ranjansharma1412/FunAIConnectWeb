
import { Mail, Phone, MapPin } from 'lucide-react';

export const legalContent = {
    terms: {
        title: "Terms & Conditions",
        lastUpdatedPrefix: "Last updated: ",
        sections: [
            {
                title: "1. Agreement to Terms",
                content: "By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
            },
            {
                title: "2. Intellectual Property Rights",
                content: "Other than the content you own, under these Terms, FunAIConnect and/or its licensors own all the intellectual property rights and materials contained in this Website."
            },
            {
                title: "3. Restrictions",
                content: "You are specifically restricted from all of the following:",
                list: [
                    "Publishing any Website material in any other media;",
                    "Selling, sublicensing and/or otherwise commercializing any Website material;",
                    "Publicly performing and/or showing any Website material;",
                    "Using this Website in any way that is or may be damaging to this Website;",
                    "Using this Website in any way that impacts user access to this Website;"
                ]
            },
            {
                title: "4. Content Liability",
                content: "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website."
            }
        ]
    },
    privacy: {
        title: "Privacy Policy",
        lastUpdatedPrefix: "Last Updated: ",
        lastUpdatedDate: "10/02/2026",
        description: "Welcome to FunAIConnect. We are committed to protecting your privacy while fostering a creative and educational social environment. This Privacy Policy explains how we collect, use, and protect your information across our Android and iOS applications.",
        sections: [
            {
                title: "1. Age Requirement (13+)",
                content: "Our services are strictly for individuals aged 13 and older. We do not knowingly collect data from children under 13. If we discover a user is under this age, we will delete their account and data immediately."
            },
            {
                title: "2. Information We Collect",
                content: "To provide a social media experience, we collect the following:",
                list: [
                    "<strong>Account Data:</strong> Name, email address, and profile picture provided during registration.",
                    "<strong>User Content:</strong> Posts, images, and text you upload or create.",
                    "<strong>AI-Generated Content:</strong> Data related to the prompts you provide our AI to generate or enhance posts.",
                    "<strong>Device Permissions:</strong><ul style='list-style-type: circle; margin-left: 1rem; margin-top: 0.5rem;'><li><strong>Camera/Gallery:</strong> To upload and share photos/videos.</li><li><strong>Microphone:</strong> For video-related features.</li><li><strong>Storage:</strong> To save created content to your device.</li></ul>"
                ]
            },
            {
                title: "3. How We Use Your Information",
                content: "We use your data to:",
                list: [
                    "Provide and maintain your social profile.",
                    "<strong>AI Integration:</strong> Use AI tools to help you generate creative posts and educational content.",
                    "<strong>Safety & Moderation:</strong> Use AI-driven filters to scan and block sexual, pornographic, or sensitive content to maintain a safe environment for our 13+ audience.",
                    "Improve our algorithms to promote educational and creative visibility."
                ]
            },
            {
                title: "4. Safety and Content Moderation",
                content: "We prioritize a safe community.",
                list: [
                    "<strong>Prohibited Content:</strong> We strictly prohibit the upload of pornography, sexual content, or highly sensitive material.",
                    "<strong>AI Moderation:</strong> Every post is screened by our AI moderation system. Content flagged as a violation will be removed, and users may face account suspension."
                ]
            },
            {
                title: "5. Data Sharing & Third Parties",
                content: "We do not sell your personal data. We may share data with:",
                list: [
                    "<strong>Cloud Providers:</strong> To store your data securely (e.g., AWS or Google Cloud).",
                    "<strong>AI Service Providers:</strong> To process your prompts for content generation.",
                    "<strong>Legal Authorities:</strong> If required by law to comply with legal obligations."
                ]
            },
            {
                title: "6. Data Retention and Deletion",
                content: "You have full control over your data.",
                list: [
                    "<strong>Account Deletion:</strong> You can delete your account at any time through the app settings.",
                    "<strong>Manual Request:</strong> You may also request data deletion by contacting us at [Insert Support Email]. Upon deletion, your personal data will be removed from our active databases within 30 days."
                ]
            },
            {
                title: "7. Contact Us",
                content: "If you have questions about this Privacy Policy or our data practices, please contact us at: Email: contact.reinventing@gmail.com, Website: https://ranjan-sharma-portfollio.netlify.app/"
            }
        ]
    },
    contact: {
        title: "Get in Touch",
        contactInfo: {
            title: "Contact Information",
            description: "Have a question or just want to say hi? We'd love to hear from you.",
            details: [
                {
                    icon: Mail,
                    title: "Email",
                    value: "support@funaiconnect.com",
                    link: "mailto:support@funaiconnect.com"
                },
                {
                    icon: Phone,
                    title: "Phone",
                    value: "+1 (555) 123-4567"
                },
                {
                    icon: MapPin,
                    title: "Address",
                    value: "123 AI Street, Tech City, TC 90210"
                }
            ]
        },
        form: {
            title: "Send us a Message",
            fields: {
                name: "Name",
                email: "Email",
                message: "Message"
            },
            buttonText: "Send Message"
        }
    }
};
