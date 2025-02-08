import { Container, Content, ContactGrid, ContactCard, ContactLink, ContactForm, Input, TextArea, Button, Title, BoxInput } from "./styles";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // Importando o EmailJS

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "", subject: "" });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Configuração do EmailJS
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
        };

        if (serviceId && templateId && publicKey) {
            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(() => {
                    alert("Mensagem enviada com sucesso!");
                    setFormData({ name: "", email: "", message: "", phone: "", subject: "" });
                })
                .catch((error) => {
                    console.error("Erro ao enviar mensagem:", error);
                    alert("Erro ao enviar mensagem. Tente novamente.");
                });
        } else {
            console.error("Erro: Variáveis de ambiente não definidas.");
            alert("Erro ao enviar mensagem. Variáveis de ambiente não definidas.");
        }
    };

    const contacts = [
        {
            name: 'Email',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
            ),
            link: 'mailto:samuelrosariodev@gmail.com',
            color: '#EA4335'
        },
        {
            name: 'WhatsApp',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                </svg>
            ),
            link: 'https://wa.me/5591985030237',
            color: '#25D366'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
            ),
            link: 'https://www.linkedin.com/in/samuelwsrosario/',
            color: '#0077B5'
        },
        {
            name: 'GitHub',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
            ),
            link: 'https://github.com/SamuelRosarioDev',
            color: '#525252'
        },
        {
            name: 'Threads',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m20.742 8.181l-1.63.433a.5.5 0 0 1 0-.11a8 8 0 0 0-.795-1.872a5.67 5.67 0 0 0-3.079-2.465a8 8 0 0 0-2.112-.392a8.4 8.4 0 0 0-1.59 0a6.9 6.9 0 0 0-2.365.664a5.46 5.46 0 0 0-2.324 2.213a7.6 7.6 0 0 0-.805 2.093q-.221.878-.291 1.78q-.054.871 0 1.741a11.6 11.6 0 0 0 .462 3.018a7.2 7.2 0 0 0 1.007 2.083a5.37 5.37 0 0 0 2.505 1.922c.62.238 1.27.387 1.932.443a9.7 9.7 0 0 0 1.941 0a6 6 0 0 0 2.174-.584a4.76 4.76 0 0 0 1.921-1.65a3.36 3.36 0 0 0 .463-2.958a2.77 2.77 0 0 0-1.107-1.52l-.352-.25c0 .13 0 .24-.05.351c-.1.622-.309 1.22-.614 1.771a3.65 3.65 0 0 1-2.656 1.902a4.6 4.6 0 0 1-2.213-.111a3.5 3.5 0 0 1-1.54-.895a2.9 2.9 0 0 1-.835-1.781a3.02 3.02 0 0 1 1.389-2.948a4.6 4.6 0 0 1 1.63-.644a9.5 9.5 0 0 1 1.77-.12q.683.015 1.359.12h.08v-.06a2.9 2.9 0 0 0-.382-1.077a1.9 1.9 0 0 0-1.258-.885a3.2 3.2 0 0 0-1.871 0a2.16 2.16 0 0 0-1.097.815l-.05.14l-1.379-.955a.6.6 0 0 0 .07-.101a3.9 3.9 0 0 1 2.456-1.56a4.86 4.86 0 0 1 2.545.111a3.5 3.5 0 0 1 2.153 1.831c.253.499.42 1.036.493 1.59c0 .211.05.423.07.634v.08l.413.202a5.3 5.3 0 0 1 1.69 1.338a4.6 4.6 0 0 1 1.007 2.012c.082.44.109.89.08 1.338a5.2 5.2 0 0 1-1.288 3.13a6.8 6.8 0 0 1-3.732 2.243c-1.229.273-2.495.33-3.743.17a8.5 8.5 0 0 1-2.757-.804a7.04 7.04 0 0 1-2.807-2.485a9 9 0 0 1-1.137-2.576a13 13 0 0 1-.392-2.012A17 17 0 0 1 4 11.764c0-.574 0-1.158.1-1.741q.116-.989.363-1.952c.207-.821.526-1.61.946-2.345a7.04 7.04 0 0 1 4.024-3.25a9 9 0 0 1 1.851-.412a11.2 11.2 0 0 1 2.395 0c.94.102 1.857.353 2.716.745a7.26 7.26 0 0 1 3.11 2.636c.54.826.948 1.733 1.207 2.686q.007.03.03.05m-5.665 4.025h-.07A8 8 0 0 0 14 12.065a9 9 0 0 0-1.067 0a4.6 4.6 0 0 0-1.177.16a2 2 0 0 0-.925.544a1.31 1.31 0 0 0 .11 1.952c.226.179.486.309.765.382a3.2 3.2 0 0 0 1.278.06c.291-.036.574-.124.835-.26c.389-.235.692-.587.865-1.007c.225-.54.357-1.116.392-1.7z"></path></svg>
            ),
            link: 'https://www.threads.net/@hisamuka',
            color: '#000000'
        }
    ];
    return (
        <Container>
            <Content>
                <ContactGrid>
                    {contacts.map((contact, index) => (
                        <ContactCard key={index} $color={contact.color}>
                            <ContactLink href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.icon}
                                <span>{contact.name}</span>
                            </ContactLink>
                        </ContactCard>
                    ))}
                </ContactGrid>

                {/* Formulário de Contato */}
                <ContactForm onSubmit={handleSubmit}>
                    <Title>Prefere me enviar um e-mail direto? Estou pronto para te ouvir!</Title>
                    <BoxInput>
                        <Input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required />
                        <Input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
                    </BoxInput>
                    <BoxInput>                     
                        <Input type="text" name="phone" placeholder="Seu Telefone" value={formData.phone} onChange={handleChange} />
                        <Input type="text" name="subject" placeholder="Assunto" value={formData.subject} onChange={handleChange} />
                    </BoxInput>
                    <TextArea name="message" placeholder="Sua Mensagem" value={formData.message} onChange={handleChange} required />
                    <Button type="submit">Enviar Mensagem</Button>
                </ContactForm>
            </Content>
        </Container>
    );
}
