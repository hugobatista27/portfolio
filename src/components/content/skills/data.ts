const SoftSkills: string[] = [
    "Comunicação",
    "Inteligência Emocional",
    "Proatividade",
    "Autonomia"
]

type typeGraduations = {
    course: string,
    startYear: number,
    conclusionYear: number | string,
}

const Graduation: typeGraduations[] = [
    {
        course: "ENgenharia de Software",
        startYear: 2024,
        conclusionYear: 'Atualmente',
    }
]

export type ClassNameType = 'front' | 'back' | 'other'

type typeHardSkill = {
    course: string,
    skills: string[],
    className: ClassNameType
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
            "Next.js",
            "Tailwind",
            "Sass",
            "Styled-Components",
        ],
        className: 'front'
    },
    {
        course: "Back",
        skills: [
            "Node",
            "Express",
            "Mongo",
            "MySQL",
        ],
        className: 'back'
    },
    {
        course: "Outros",
        skills: [
            "Figma",
            "Photoshop",
            "Microsoft 365",
            "Google Workspace",
        ],
        className: 'other'
    }
]

export { SoftSkills, Graduation, HardSkills }