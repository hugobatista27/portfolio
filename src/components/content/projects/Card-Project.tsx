type StackDescription = {
    img: string,
    description: string
}

type CardType = {
    name: string,
    img: string,
    technologies: StackDescription[],
    description: string
}

type PropType = {
    projectInfo: CardType
}

export default function CardProject({projectInfo}:PropType) {
    return (
        <>
            <div>
                <img src={projectInfo.img} alt="" />
                <h2>{projectInfo.name}</h2>
                <div>
                    <div className="stack">
                        {projectInfo.technologies.map((technology) => <img src={technology.img} alt="" />) }
                    </div>
                    <button>
                        Ver Mais
                    </button>
                </div>
            </div>
        </>
    )
}