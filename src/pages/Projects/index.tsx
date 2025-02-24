import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
    Modal,
    ModalContent,
    CloseButton,
    ModalImage,
    ModalTitle,
    ModalDescription,
    ModalTechStack,
    ModalLinks,
    Container,
    ProjectGrid,
    ProjectCard,
    ProjectImage,
    ProjectLinks,
    ProjectLink,
    TechStack,
    TechIcon,
    ModalInfos,
    ModalCard
} from "./styles";

const projects = [
    {
        id: "linktree",
        image: "./imgProjects/linketree.png",
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    },{
        id: "portfolio",
        image: "./imgProjects/linketree.png",
        techs: [
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Node.js", icon: "/icons/node.svg" }
        ],
        github: "https://github.com/SamuelRosarioDev/Liketree-Samuel",
        demo: "https://samueldorosario-linktree.vercel.app/"
    }
];

export function Projects() {
        interface Project {
        id: string;
        image: string;
        techs: { name: string; icon: string }[];
        github: string;
        demo: string;
    }
    
    const { translation } = useLanguage();

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    

    const openModal = (project: { id: string; image: string; techs: { name: string; icon: string }[]; github: string; demo: string }) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <Container>
            <ProjectGrid>
                {projects.map((project) => (
                    <ProjectCard key={project.id}>
                        <ProjectImage>
                            <img src={project.image} alt={translation.projects?.[project.id]?.title || "Projeto"} />
                            <ProjectLinks>
                                <ProjectLink onClick={() => openModal(project)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="#fff" d="M16 11a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></path>
                                        <path fill="#fff" fillRule="evenodd" d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11m9-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14" clipRule="evenodd"></path>
                                    </svg>
                                </ProjectLink>
                            </ProjectLinks>
                        </ProjectImage>
                        <TechStack>
                            {project.techs.map((tech, techIndex) => (
                                <TechIcon key={techIndex} src={tech.icon} alt={tech.name} title={tech.name} />
                            ))}
                        </TechStack>
                    </ProjectCard>
                ))}
            </ProjectGrid>

            {selectedProject && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path>
                            </svg>
                        </CloseButton>
                        <ModalCard>
                            <ModalImage src={selectedProject.image} alt={translation.projects?.[selectedProject.id]?.title || "Projeto"} />
                            <ModalInfos>
                                <div>
                                    <ModalTitle>{translation.projects?.[selectedProject.id]?.title || "Projeto"}</ModalTitle>
                                    <ModalDescription>{translation.projects?.[selectedProject.id]?.description || "Descrição"}</ModalDescription>
                                </div>
                                <ModalLinks>
                                    <ProjectLink href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </ProjectLink>
                                    <ProjectLink href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                                        Preview
                                    </ProjectLink>
                                </ModalLinks>
                            </ModalInfos>
                        </ModalCard>
                        <ModalTechStack>
                            {selectedProject.techs.map((tech, index) => (
                                <TechIcon key={index} src={tech.icon} alt={tech.name} title={tech.name} />
                            ))}
                        </ModalTechStack>
                    </ModalContent>
                </Modal>
            )}
        </Container>
    );
}
