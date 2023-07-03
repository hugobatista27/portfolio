import { SoftSkills } from "../data";

export default function SoftSkillsCard() {
    return (
        <div className="soft">
            <h2>Soft</h2>
            <ul>
                {SoftSkills.map((skill, index) => <li key={skill + index}>{skill}</li>)}
            </ul>
        </div>
    )
}