
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
        lastUpdatedPrefix: "Last updated: ",
        sections: [
            {
                title: "1. Introduction",
                content: "Welcome to FunAIConnect. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
            },
            {
                title: "2. Data We Collect",
                content: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:",
                list: [
                    "<strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.",
                    "<strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.",
                    "<strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version."
                ]
            },
            {
                title: "3. How We Use Your Data",
                content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
                list: [
                    "Where we need to perform the contract we are about to enter into or have entered into with you.",
                    "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
                    "Where we need to comply with a legal or regulatory obligation."
                ]
            },
            {
                title: "4. Data Security",
                content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed."
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
