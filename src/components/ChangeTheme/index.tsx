import { ButtonTheme } from "./styles";

// Interface para o ChangeTheme
interface ChangeThemeProps {
    setTheme: React.Dispatch<React.SetStateAction<'Light' | 'Dark'>>;
}

export function ChangeTheme({ setTheme }: ChangeThemeProps) {
    //Função de troca de tema
    const changeTheme = () => {
        // Consulta o localstorage se o theme  é igual a light ele troca para dark e virse versa
        const newTheme = localStorage.getItem('theme') === 'Light' ? 'Dark' : 'Light';
        // Salva no localStorage
        localStorage.setItem('theme', newTheme);
        // Envia para a Interface válidar o dado enviado
        setTheme(newTheme);
    };
    // Verificar se o thema é light se sim ele coloca um sol, caso não ele coloca uma lua pois prov é dark
    const moon = <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="#fff" fillOpacity={0}><path d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"></animate></path><path d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate></path></g><path fill="#eeeeee" stroke="#fff" strokeDasharray={56} strokeDashoffset={56} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate></path></svg>
    const sun =  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={36} strokeDashoffset={36} d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="36;0"></animate></path><path strokeDasharray={2} strokeDashoffset={2} d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="2;0"></animate></path><path strokeDasharray={2} strokeDashoffset={2} d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></animate></path></g></svg>
    const changeIcon = localStorage.getItem('theme') === 'Light' ? sun : moon;

    return (
        <ButtonTheme onClick={changeTheme}>
            {changeIcon}
        </ButtonTheme>
    );
}
