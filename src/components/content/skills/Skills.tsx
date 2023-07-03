import { ContentWidth } from "../../../styles/global-style";
import styled from 'styled-components';
import { useState } from 'react';

import { SoftSkills, Graduation, HardSkills, ClassNameType } from './data';

import IMG_SKILLS from './images/imagem-skills.png';

const SkillsStyle = styled.div`
    display: flex;
    padding: 20px 0;
    background-color: #5AE4A8;

    h1 {
        margin-bottom: 32px;
    }

    h2 {
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

    @media (max-width: 650px) {
        h3 {
            margin-bottom: 0;
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
        border: 1px solid #d4d4d4;
        border-radius: 20px;
        box-shadow: 7px 11px 10px #37373778;
        padding: 16px;
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
            @media (min-width: 650px) {
                height: 74px;
                gap: 0 24px;
                overflow: hidden;
                box-sizing: content-box;
                padding-bottom: 10px;
            }
        }
    }
    .back {
        grid-area: back;
    }
    .other {
        grid-area: other;
    }

    button {
        display: none;
    }
    
    @media (max-width: 650px) {
        & > div {
            display: flex;
            flex-direction: column;

            ul {
                box-sizing: content-box;
                overflow: hidden;
                height: 0;
                margin-bottom: 10px;
            }
        }
        .title {
            display: flex;
            align-items: center;
            justify-content: space-between;

            button {
                display: block;
            }
        }
    }
`;

export default function Skills() {
    const [seeMoreSkills, setSeeMoreSkills] = useState<ClassNameType | null>();

    const showSkills = (skillArea : ClassNameType) => {
        if (seeMoreSkills === skillArea) {
            setSeeMoreSkills(null)
        } else {
            setSeeMoreSkills(skillArea)
        }
    }

    const verifyShowSkill = (className: string) => {
        if (className === seeMoreSkills) {
            return true
        }
    }

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
                                        <div className="title">
                                            <h3>{obj.course}</h3>
                                            <button
                                                onClick={() => showSkills(obj.className)}
                                            >
                                                &gt;
                                            </button>
                                        </div>
                                        <ul style={{height: verifyShowSkill(obj.className) ? '100%' : '0'}}>
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