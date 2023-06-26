import { ContentWidth } from "../../../styles/global-style";
import styled from 'styled-components';

import { SoftSkills, Graduation, HardSkills } from './data';

import IMG_SKILLS from './images/imagem-skills.png';

const SkillsStyle = styled.div`
    display: flex;
    padding: 20px 0;
    background-color: #5AE4A8;

    h1 {
        font-size: 60px;
        margin-bottom: 32px;
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

    @media (max-width: 1000px) {
            & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

const BoxSkills = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: "soft hard img" "graduation hard img";
    grid-template-columns: minmax(200px, 260px) minmax(400px, 470px);
    gap: 12px;
    align-items: center;


    & > div {
        background-color: white;
        border-radius: 22px;
        border: 1px solid black;

        padding: 15px;
    }

    .soft {
        grid-area: soft;
    }
    .graduation {
        grid-area: graduation;
    }
    .hard {
        grid-area: hard;
    }
    & > img {
        grid-area: img;
        width: 300px;
    }

    @media (max-width: 1000px) {
        width: 600px;
        grid-template-areas:
            "soft img"
            "graduation img "
            "hard hard";
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 650px) {
        width: 300px;

        grid-template-areas:
            "img"
            "soft"
            "graduation"
            "hard";
        grid-template-columns: 1fr;

        & > img {
            width: 100%;
        }
    }
`;

const HardSkillsStyle = styled.div`
    width: 100%;
    height: 100%;


    & > div {
        display: grid;
        grid-template-areas: "front front" "back other";
        grid-template-columns: 1fr 1fr;
    }

    .front {
        grid-area: front;
        ul {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 74px;
            gap: 0 24px;
            overflow: hidden;
            box-sizing: content-box;
            padding-bottom: 10px;
        }
    }
    .back {
        grid-area: back;
    }
    .other {
        grid-area: other;
    }

    

    @media (max-width: 650px) {
            & > div {
                display: flex;
                flex-direction: column;

            .front {
                ul {
                    display: block;
                    height: auto;
                }
            }

            ul {
                box-sizing: content-box;
                padding-bottom: 10px;
            }
        }
    }
`;

export default function Skills() {
    return (
        <SkillsStyle id="skills">
            <ContentWidth>
                <h1>Skills</h1>
                <BoxSkills>
                    <div className="soft">
                        <h2>Soft</h2>
                        <ul>
                            {SoftSkills.map((skill, index) => <li key={skill + index}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="graduation">
                        <h2>Graduação</h2>
                        <ul>
                            {Graduation.map((obj, index) => <li key={obj.course + index}>
                                <p>{obj.course}</p>
                                <p>{obj.startYear} - {obj.conclusionYear}</p>
                            </li>)}
                        </ul>
                    </div>
                    <HardSkillsStyle className="hard">
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