import { JSX } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Container, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, ServicesList, ServiceItem } from "./styles";

interface Service {
    title: string;
    description: string;
    features?: string[];
    icon: JSX.Element;
}

const serviceIcons: Record<string, JSX.Element> = {
    development: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM16.5 9H20v9h-3.5z" opacity={0.3}></path><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5.5 14H4v-3.5h10.5zm0-5.5H4V9h10.5zM20 18h-3.5V9H20z"></path></svg>,
    maintenance: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 26 26"><path fill="currentColor" d="M1.313 0L0 1.313l2.313 4l1.5-.22l9.156 9.157l-.781.75c-.4.4-.4 1.006 0 1.406l.406.407c.4.4 1.012.4 1.312 0L15.094 18c-.1.6 0 1.313.5 1.813L21 25.188c1.1 1.1 2.9 1.1 4 0c1.3-1.2 1.288-2.994.188-4.094l-5.375-5.407c-.5-.5-1.213-.7-1.813-.5L16.687 14c.3-.4.3-1.012 0-1.313l-.375-.374a.974.974 0 0 0-1.406 0l-.656.656l-9.156-9.156l.218-1.5l-4-2.313zm19.5.031C18.84-.133 16.224 1.175 15 2.312c-1.506 1.506-1.26 3.475-.063 5.376l-2.124 2.125l1.5 1.687c.8-.7 1.98-.7 2.78 0l.407.406l.094.094l.875-.875c1.808 1.063 3.69 1.216 5.125-.219c1.4-1.3 2.918-4.506 2.218-6.406L23 7.406c-.4.4-1.006.4-1.406 0L18.687 4.5a.974.974 0 0 1 0-1.406L21.595.188c-.25-.088-.5-.133-.782-.157m-11 12.469l-3.626 3.625A5.3 5.3 0 0 0 5 16c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5c0-.513-.081-1.006-.219-1.469l2.125-2.125l-.312-.406c-.8-.8-.794-2.012-.094-2.813L9.812 12.5zm7.75 4.563c.125 0 .243.024.343.125l5.907 5.906c.2.2.2.518 0 .718s-.52.2-.72 0l-5.905-5.906c-.2-.2-.2-.518 0-.718c.1-.1.25-.125.375-.125M5.688 18.405l1.906 1.907l-.688 2.593l-2.593.688l-1.907-1.907l.688-2.593z"></path></svg>,
    automation: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M13 20.693c-.905.628-2.36.292-2.675-1.01a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492.362 1.716 2.219.674 3.03"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8 10l5-3l-5-3z"></path></g></svg>,
    inventory: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="m21 11.5l1.5 1.5l-6.99 7L11 15.5l1.5-1.5l3.01 3z"></path><path fill="currentColor" d="M17 5v3H7V5H5v14h6.68l-3.51-3.5l4.33-4.33l3.01 3l3.49-3.5V5z" opacity={0.3}></path><path fill="currentColor" d="M5 19V5h2v3h10V5h2v5.67l2-2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8.68l-2-2zm7-16c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></path></svg>,
    mobileApps: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><rect width={10} height={14} x={3} y={8} rx={2}></rect><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4M8 18h.01"></path></g></svg>,
    database: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><ellipse cx={12} cy={5} rx={8} ry={3}></ellipse><path d="M7 10.842c.602.18 1.274.33 2 .44M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"></path><path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5"></path></g></svg>
};

export function Services() {
    const { translation } = useLanguage() as {
        translation: {
            services?: Record<string, Service>;
        };
    };

    console.log(translation.services);

    return (
        <Container>
            <ServicesGrid>
                {translation.services &&
                    Object.entries(translation.services).map(([key, service]) => (
                        <ServiceCard key={key}>
                            <ServiceIcon>
                                {serviceIcons[key]}
                                <ServiceTitle>{service.title}</ServiceTitle>
                            </ServiceIcon>
                            <ServiceDescription>{service.description}</ServiceDescription>
                            {service.features && (
                                <ServicesList>
                                    {service.features.map((feature, index) => (
                                        <ServiceItem key={index}>{feature}</ServiceItem>
                                    ))}
                                </ServicesList>
                            )}
                        </ServiceCard>
                    ))}
            </ServicesGrid>
        </Container>
    );
}
