import { ButtonLanguage } from './styles';

export function ChangeLanguage({ setLanguage }: { setLanguage: (language: 'Portuguese' | 'English') => void }) {
    const changeLanguage = () => {
        const newLanguage = localStorage.getItem('language') === 'Portuguese' ? 'English' : 'Portuguese';
        localStorage.setItem('language', newLanguage);
        setLanguage(newLanguage as 'Portuguese' | 'English');
    };
    return (
        <ButtonLanguage onClick={changeLanguage}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M14.022 7h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V8a3.003 3.003 0 0 0-3-3h-1a1 1 0 0 0 0 2m-4 9h-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2m11-1a1 1 0 0 0 0-2h-3v-.5a1 1 0 0 0-2 0v.5h-3a1 1 0 0 0 0 2h5.184a6.7 6.7 0 0 1-1.225 2.527a6.7 6.7 0 0 1-.63-.983a1 1 0 1 0-1.779.912a8.7 8.7 0 0 0 .96 1.468a6.6 6.6 0 0 1-2.426 1.099a1 1 0 0 0 .427 1.954a8.6 8.6 0 0 0 3.445-1.622a8.7 8.7 0 0 0 3.469 1.622a1 1 0 1 0 .43-1.954a6.7 6.7 0 0 1-2.446-1.09A8.74 8.74 0 0 0 20.244 15Zm-11.97-3.757a1 1 0 0 0 1.94-.486l-1.757-7.03a2.281 2.281 0 0 0-4.426 0l-1.757 7.03a1 1 0 0 0 1.94.486L5.552 9h2.94ZM6.052 7l.698-2.787a.291.291 0 0 1 .544 0L7.991 7Z"></path>
            </svg>
        </ButtonLanguage>
    );
}