import imgSamuel from '../../assets/samuel.jpg'
import { Box } from '../../components/Box';
import { Ability, Card, Container, History, InfoImg, InfoPerfil } from "./styles";

export function About() {

    return (
        <Container>
            <Card>
                <Box>
                    <InfoPerfil>
                        <h4>Samuel do Rosário</h4>
                        <span>Desenvolvedor FullStack</span>
                    </InfoPerfil>

                    <InfoImg src={imgSamuel} alt="foto de Samuel" />
                </Box>
                <History>
                    <p>Sou <b>Samuel do Rosário</b>, minha paixão por tecnologia começou na infância criando <b>servidores e plugins</b> de Minecraft com <b>Java</b>. Aos 13 anos, iniciei no <b>desenvolvimento web</b> com <b>HTML, CSS e JavaScript</b>, e aos 17, decidi levar isso a sério, me dedicando aos estudos para transformar meu hobby em profissão.
                        <br />
                        Hoje, busco aprimorar minhas habilidades em desenvolvimento web e explorar cibersegurança, áreas que me fascinam e onde quero construir minha carreira.</p>
                </History>
                <Ability>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React (Vite)</li>
                        <li>Styled Components</li>
                        <li>Hooks</li>
                        <li>Node.js</li>
                        <li>Bun</li>
                        <li>Java</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>Prisma</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>API Restful</li>
                        <li>Bots</li>
                        <li>MVC</li>
                        <li>MVP</li>
                    </ul>

                </Ability>
                
            </Card>
        </Container>
    );
}
