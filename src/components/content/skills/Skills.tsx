import { ContentWidth } from "../../../styles/global-style";
import styled from 'styled-components';

import { SoftSkills, Graduation, HardSkills } from './data'

export default function Skills() {
    return (
        <>
            <ContentWidth>
                <h1>Skills</h1>
                <div>
                    <h2>Soft</h2>
                    <ul>
                        {SoftSkills.map((skill, index) => <li key={skill + index}>{skill}</li>)}
                    </ul>
                </div>
                <div>
                    <h2>Graduação</h2>
                    <ul>
                        {Graduation.map((obj, index) => <li key={obj.course + index}>
                            <p>{obj.course}</p>
                            <p>{obj.startYear} - {obj.conclusionYear}</p>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <h2>Hard</h2>
                    <ul>
                        {HardSkills.map((obj, index) => {
                            return (
                                <div key={obj.course + index}>
                                    <h3>{obj.course}</h3>
                                    {obj.skills.map((skill, index) => <li key={skill + index}>
                                        {skill}
                                    </li>)}
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </ContentWidth>
        </>
    )
}