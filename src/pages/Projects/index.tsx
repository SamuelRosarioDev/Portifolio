import { Container, ProjectGrid, ProjectCard, ProjectImage, TechStack, TechIcon, ProjectLinks, ProjectLink } from "./styles";
import imgLinketree from "../../assets/projectsImages/linketree.png"

interface Project {
    image: string;
    techs: {
        name: string;
        icon: string;
    }[];
    github: string;
    demo: string;
}

const projects: Project[] = [
    {
        image: imgLinketree,
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    },{
        image: imgLinketree,
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    },{
        image: imgLinketree,
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    },{
        image: imgLinketree,
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    },{
        image: imgLinketree,
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    },{
        image: imgLinketree,
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    }
    // Adicione mais projetos aqui
];

export function Projects() {
    return (
        <Container>

            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index}>
                        <ProjectImage>
                            <img src={project.image} alt={`Projeto ${index + 1}`} />
                            <ProjectLinks>
                                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </ProjectLink>
                                <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                                    Ver Projeto
                                </ProjectLink>
                            </ProjectLinks>
                        </ProjectImage>
                        <TechStack>
                            {project.techs.map((tech, techIndex) => (
                                <TechIcon 
                                    key={techIndex}
                                    src={tech.icon} 
                                    alt={tech.name}
                                    title={tech.name}
                                />
                            ))}
                        </TechStack>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </Container>
    );
}