import { Graduation } from "../data";

export default function GraduationCard() {
    return (
        <div className="graduation">
            <h2>Graduação</h2>
            <ul>
                {Graduation.map((obj, index) => <li key={obj.course + index}>
                    <p>{obj.course}</p>
                    <p>{obj.startYear} - {obj.conclusionYear}</p>
                </li>)}
            </ul>
        </div>
    )
}