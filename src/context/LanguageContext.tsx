import { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

type Language = 'Portuguese' | 'English';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    translation: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const stored = localStorage.getItem('language');
        return stored === 'Portuguese' || stored === 'English' ? stored as Language : 'Portuguese';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const translation = useTranslation(language);

    if (!translation || translation.error) {
        return <div>Erro ao carregar traduções. Tente recarregar a página.</div>;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translation }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
