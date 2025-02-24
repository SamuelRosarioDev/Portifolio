import { useLanguage } from "../../context/LanguageContext";
import { Container, Content, Name, Role, Description, Highlight } from "./styles";

export function Home() {
    const { translation } = useLanguage() as {
        translation: {
            home?: {
                role: string;
                description: string;
            };
        };
        setLanguage: (language: string) => void;
    };

    const formatDescription = (text: string) => {
        return text.split(/(<Highlight>.*?<\/Highlight>)/g).map((part, index) => {
            if (part.startsWith("<Highlight>") && part.endsWith("</Highlight>")) {
                return (
                    <Highlight key={index}>
                        {part.replace("<Highlight>", "").replace("</Highlight>", "")}
                    </Highlight>
                );
            }
            return part;
        });
    };

    return (
        <Container>
            <Content>
                <Name>Samuel Rosário</Name>
                <Role>{translation.home?.role || "Desenvolvedor Full Stack"}</Role>
                <Description>
                    {translation.home?.description
                        ? formatDescription(translation.home.description)
                        : "Transformando ideias em código, criando soluções inovadoras e construindo experiências digitais únicas."}
                </Description>
            </Content>
        </Container>
    );
}
