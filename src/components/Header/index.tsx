import { ChangeTheme } from "../ChangeTheme";
import { ChangeLanguage } from "../ChangeLanguage";
import { ContainerHeader, HeaderSoul, Linkers, NavBar, TranslationAndTheme } from "./styles";
import { useLanguage } from "../../context/LanguageContext";

// Interface única para a tradução e contexto de idioma
interface LanguageContextType {
    translation: {
        header: {
            home: string;
            about: string;
            projects: string;
            services: string;
            curriculum: string;
            contact: string;
        };
    };
    setLanguage: (language: string) => void;
}

// Interface para os props do Header
interface HeaderProps {
    setTheme: React.Dispatch<React.SetStateAction<'Light' | 'Dark'>>;
}

export function Header({ setTheme }: HeaderProps) {
    const { translation, setLanguage } = useLanguage() as LanguageContextType;

    return (
        <>
            <ContainerHeader>
                <NavBar>
                    <Linkers href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                            <path fill="currentColor" d="M5.37 1.222a1 1 0 0 1 1.26 0l3.814 3.09A1.5 1.5 0 0 1 11 5.476V10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7H5v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5.477a1.5 1.5 0 0 1 .556-1.166zm4.445 3.866L6 2L2.185 5.088A.5.5 0 0 0 2 5.477V10h2V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h2V5.477a.5.5 0 0 0-.185-.389"></path>
                        </svg>
                        <span>{translation.header?.home}</span>
                    </Linkers>
                    <Linkers href='/about'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path>
                        </svg>
                        <span>{translation.header?.about}</span>
                    </Linkers>
                    <Linkers href='/projects'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={640} height={512} viewBox="0 0 640 512"><path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32M192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32"></path></svg>
                        <span>{translation.header?.projects}</span>
                    </Linkers>
                    <Linkers href='/services'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth={2} d="M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6V0m0 12V9M0 6h3m6 0h3M2 2l2 2m4 4l2 2m0-8L8 4M4 8l-2 2m16 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6V3m0 12v-3m-6-3h3m6 0h3M14 5l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2m-5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6v-3m0 12v-3m-6-3h3m6 0h3M5 14l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2"></path></svg>
                        <span>{translation.header?.services}</span>
                    </Linkers>
                    <Linkers href='/curriculum'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1}><path strokeLinejoin="round" d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"></path><path strokeLinejoin="round" d="M3.5 5.94a2.2 2.2 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304s.697.104 1.003.304c.307.199.563.486.746.834"></path><path strokeLinejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></path><path d="M3.5 8.5h7m-7 2.5h4"></path></g></svg>
                        <span>{translation.header?.curriculum}</span>
                    </Linkers>
                    <Linkers href='/contact'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={2048} height={2048} viewBox="0 0 2048 2048"><path fill="currentColor" d="M740 1461q65 33 117 81t90 108t57 128t20 142H896q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149H0q0-73 20-141t57-128t89-108t118-82q-74-55-115-136t-41-173q0-79 30-149t82-122t122-83t150-30q92 0 173 41t136 115q38-75 97-134t134-97q-74-55-115-136t-41-173q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 92-41 173t-115 136q65 33 117 81t90 108t57 128t20 142h-128q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149q0 92-41 173t-115 136m284-1077q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100m-768 768q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100m1024 256h768v128h-768zm0 384v-128h768v128zm0 256v-128h768v128z"></path></svg>                        <span>{translation.header?.contact}</span>
                    </Linkers>
                </NavBar>
                <TranslationAndTheme>
                    <ChangeLanguage setLanguage={setLanguage} />
                    <ChangeTheme setTheme={setTheme} />
                </TranslationAndTheme>
            </ContainerHeader>
            <HeaderSoul />
        </>
    );
}
