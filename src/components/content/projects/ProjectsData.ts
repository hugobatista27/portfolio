import { Images } from "../../../assets/print-projects/ExportImages";

type LinksType = {
    repository?: string,
    deploy?: string
}

export type CardType = {
    name: string,
    img: string[],
    technologies: string[],
    description: string
    links?: LinksType
}

const ProjectsData: CardType[] = [
    {
        name: "Kanban",
        img: Images.kanban,
        technologies: [
            "react",
            "node",
            "mongo",
            "sass",
        ],
        description: "O projeto Kanban, uma aplicação web fullstack baseada na metodologia Kanban, design proposto pelo site Frontend Mentor. Com funcionalidade intuitiva e design responsivo, o site permite a organização e gerenciamento de tarefas de forma eficiente. Os usuários podem criar diferentes projetos, quadros de tarefas com subtarefas e mover esses quadros entre as colunas.",
        links: {
            deploy: "https://kanban-livid-seven.vercel.app/",
            repository: "https://github.com/hugobatista27/Kanban",
        }
    },
    {
        name: "Dicionario",
        img: Images.dicionario,
        technologies: [
            "react",
            "node",
            "mongo",
            "sass",
        ],
        description: "O projeto Kanban, uma aplicação web fullstack baseada na metodologia Kanban, design proposto pelo site Frontend Mentor. Com funcionalidade intuitiva e design responsivo, o site permite a organização e gerenciamento de tarefas de forma eficiente. Os usuários podem criar diferentes projetos, quadros de tarefas com subtarefas e mover esses quadros entre as colunas.",
        links: {
            deploy: "https://kanban-livid-seven.vercel.app/",
            repository: "https://github.com/hugobatista27/Kanban",
        }
    }
]

export { ProjectsData };