import { imageExport } from "./imageExport"



type CardType = {
    name: string,
    img: string,
    technologies: string[],
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
                        {projectInfo.technologies.map((technology) => {
                            const imgInfo = imageExport(technology)

                            return (
                                <img src={imgInfo.img} alt={imgInfo.description} />
                            )
                        })}
                    </div>
                    <button>
                        Ver Mais
                    </button>
                </div>
            </div>
        </>
    )
}