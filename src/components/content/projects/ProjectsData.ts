type LinksType = {
    github?: string,
    deploy?: string
}

type CardType = {
    name: string,
    img: string,
    technologies: string[],
    description: string
    links?: LinksType
}

const ProjectsData: CardType[] = [
    {
        name: "Kanban",
        img: "https://media.licdn.com/dms/image/D4D22AQFkT-840_DEyg/feedshare-shrink_2048_1536/0/1686057523487?e=1690416000&v=beta&t=9aMp4X7syBf1suRq-XeB4GOBBejaC9ogaoo-biq1How",
        technologies: [
            "react",
            "node",
            "mongo",
            "sass",
        ],
        description: "O projeto Kanban, uma aplicação web fullstack baseada na metodologia Kanban, design proposto pelo site Frontend Mentor. Com funcionalidade intuitiva e design responsivo, o site permite a organização e gerenciamento de tarefas de forma eficiente. Os usuários podem criar diferentes projetos, quadros de tarefas com subtarefas e mover esses quadros entre as colunas."
    }
]

export { ProjectsData };