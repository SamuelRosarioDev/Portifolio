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
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                            <path fill="currentColor" d="M3 6v8h5.635L12 19.908V27h8v-8h-6.217l-2.845-5H11v-3h10v3h8V6h-8v3H11V6zm2 2h4v4H5zm18 0h4v4h-4zm-8.582 13H18v4h-4v-3.762z"></path>
                        </svg>
                        <span>{translation.header?.projects}</span>
                    </Linkers>
                    <Linkers href='/services'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                            <path fill="currentColor" d="M20 20h10v2H20zm0 4h6v2h-6z"></path>
                            <path fill="currentColor" d="M30 17v-1a13.987 13.987 0 1 0-10.77 13.625l-.46-1.946A12 12 0 0 1 16 28c-.19 0-.375-.019-.563-.027A20.3 20.3 0 0 1 12.026 17Zm-2.041-2h-5.984a24.3 24.3 0 0 0-2.774-10.559A12.02 12.02 0 0 1 27.96 15M16.563 4.027A20.3 20.3 0 0 1 19.974 15h-7.948a20.3 20.3 0 0 1 3.411-10.973C15.625 4.02 15.81 4 16 4s.375.019.563.027"></path>
                        </svg>
                        <span>{translation.header?.services}</span>
                    </Linkers>
                    <Linkers href='/curriculum'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                            <g fill="none" stroke="currentColor" strokeLinecap="round">
                                <path strokeLinejoin="round" d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"></path>
                                <path strokeLinejoin="round" d="M3.5 5.94a2.2 2.2 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304s.697.104 1.003.304c.307.199.563.486.746.834"></path>
                            </g>
                        </svg>
                        <span>{translation.header?.curriculum}</span>
                    </Linkers>
                    <Linkers href='/contact'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={2048} height={2048} viewBox="0 0 2048 2048">
                            <path fill="currentColor" d="M740 1461q65 33 117 81t90 108t57 128t20 142H896q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149H0q0-73 20-141t57-128t89-108t118-82q-74-55-115-136t-41-173q0-79 30-149t82-122t122-83t150-30q92 0 173 41t136 115"></path>
                        </svg>
                        <span>{translation.header?.contact}</span>
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
