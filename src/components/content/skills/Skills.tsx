import { ContentWidth } from "../../../styles/global-style";
import styled from 'styled-components';

import { SoftSkills, Graduation, HardSkills } from './data';

import IMG_SKILLS from './images/imagem-skills.png';

const SkillsStyle = styled.div`
    padding: 20px 0;
    background-color: #5AE4A8;

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 32px;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 25px;
        margin-bottom: 10px;
    }

    li {
        font-size: 18px;
        padding-bottom: 3px;
        word-wrap: break-word;
    }
`;

const BoxSkills = styled.div`
    display: flex;
    gap: 14px;


    .Soft-Graduation {
        display: flex;
        flex-direction: column;
        gap: 14px;

        max-width: 260px;

        & > div {
            background-color: white;
            border-radius: 22px;
            border: 1px solid black;

            padding: 15px;
        }

    }

    img {
        width: 330px;
    }
`;

const HardSkillsStyle = styled.div`
    width: 100%;

    background-color: white;
    border-radius: 22px;
    border: 1px solid black;

    padding: 15px;
    & > div {
        display: grid;
        grid-template-areas: "front front" "back other";
    }

    .front {
        grid-area: front;
        ul {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 74px;
            gap: 0 24px;
        }
    }
    .back {
        grid-area: back;
    }
    .other {
        grid-area: other;
    }
`;

export default function Skills() {
    return (
        <SkillsStyle>
            <ContentWidth>
                <h1>Skills</h1>
                <BoxSkills>
                    <div className="Soft-Graduation">
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
                    </div>
                    <HardSkillsStyle>
                        <h2>Hard</h2>
                        <div>
                            {HardSkills.map((obj, index) => {
                                return (
                                    <div key={obj.course + index} className={obj.className}>
                                        <h3>{obj.course}</h3>
                                        <ul>
                                            {obj.skills.map((skill, index) => <li key={skill + index}>
                                                {skill}
                                            </li>)}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </HardSkillsStyle>
                    <img src={IMG_SKILLS} alt="Image Skills" />
                </BoxSkills>
            </ContentWidth>
        </SkillsStyle>
    )
}