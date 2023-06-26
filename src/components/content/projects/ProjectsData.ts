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
        description: "description"
    }
]

export { ProjectsData };