import { ContactContainer, ContactHead, ContactBody, ContactLink } from "./styles/Contact.styled";

export default function Contact() {
    return (
        <section id="contact">
            <ContactContainer>
                <ContactHead>Want to Chat?</ContactHead>
                <ContactBody>
                You can contact me at my email, <ContactLink href="mailto:dnsavage1@outlook.com">
                    dnsavage1@outlook.com
                </ContactLink>. 
                I'll also respond to messages on <ContactLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dnsavage/">
                    LinkedIn
                </ContactLink>. 
                If you're not quite ready to reach out, consider taking a copy of my <ContactLink target="_blank" rel="noopener noreferrer" href="https://bama365-my.sharepoint.com/:b:/g/personal/dnsavage_crimson_ua_edu/EUfqy1FJBi9Ch5zoNuXflGsBBvUXEAltd3SCRqpOYK4kkA?e=vAxZr2">
                    resume
                </ContactLink> for future reference.<br/><br/>
                I hope to hear from you soon!
                </ContactBody>
            </ContactContainer>
        </section>
    );
}