import { Container, Content, Name, Role, Description, Highlight } from "./styles";

export function Home() {
    return (
        <Container>
            <Content>
                <Name>Samuel Rosário</Name>
                <Role>Desenvolvedor Full Stack</Role>
                <Description>
                    Transformando ideias em <Highlight>código</Highlight>,
                    criando soluções <Highlight>inovadoras</Highlight> e
                    construindo experiências <Highlight>digitais</Highlight> únicas.
                </Description>
            </Content>
        </Container>
    )
}