import { ContentWidth } from "../../../styles/global-style";

const SoftSkills: string[] = [
    "Comunicação",
    "Inteligência Emocional",
    "Proatividade",
    "Autonomia"
]

type typeGraduations = {
    course: string,
    startYear: number,
    conclusionYear: number,
}

const Graduation: typeGraduations[] = [
    {
        course: "Licenciatura em Educação Física",
        startYear: 2019,
        conclusionYear: 2023,
    }
]

type typeHardSkill = {
    course: string,
    skills: string[]
}

const HardSkills: typeHardSkill[] = [
    {
        course: "Front",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Sass",
            "Styled-Components",
        ]
    },
    {
        course: "Back",
        skills: [
            "Node",
            "Express",
            "Mongo",
            "MySQL",
        ]
    },
    {
        course: "Outros",
        skills: [
            "Figma",
            "Photoshop",
            "Microsoft 365",
            "Google Workspace",
        ]
    }
]

export default function Skills() {
    return (
        <>
            <ContentWidth>
                <h1>Skills</h1>
                <div>
                    <h2>Soft</h2>
                </div>
                <div>
                    <h2>Graduação</h2>
                </div>
                <div>
                    <h2>Hard</h2>
                </div>
            </ContentWidth>
        </>
    )
}