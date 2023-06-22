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

export { SoftSkills, Graduation, HardSkills }