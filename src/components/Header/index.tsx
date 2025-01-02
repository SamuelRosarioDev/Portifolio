import { ChangeTheme } from "../ChangeTheme";

// Interface para o HeaderProps
interface HeaderProps {
  // so aceita valores light e dark
  setTheme: React.Dispatch<React.SetStateAction<'Light' | 'Dark'>>; 
}

export function Header({ setTheme }: HeaderProps) {
  return (
    <header>
      <h1>Meu Site</h1>
      <ChangeTheme setTheme={setTheme} />
    </header>
  );
}
