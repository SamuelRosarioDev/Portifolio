import { ButtonTheme } from "./styles";
import moon from '/icons/moon.svg';
import sun from '/icons/sun.svg';

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
    const changeIcon = localStorage.getItem('theme') === 'Light' ? sun : moon;

    return (
        <ButtonTheme onClick={changeTheme}>
            <img src={changeIcon} alt="iconTheme" />
        </ButtonTheme>
    );
}
