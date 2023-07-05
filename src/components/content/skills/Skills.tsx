import { ContentWidth } from "../../../styles/global-style";
import styled from 'styled-components';

import SoftSkillsCard from "./skillsComponents/SoftSkillsCard";
import GraduationCard from "./skillsComponents/GraduationCard";
import HardSkillsCard from "./skillsComponents/HardSkillsCard";

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


export default function Skills() {
    return (
        <SkillsStyle id="skills">
            <ContentWidth>
                <h1>Skills</h1>
                <BoxSkills>
                    <SoftSkillsCard/>
                    <GraduationCard/>
                    <HardSkillsCard/>
                    <img src={IMG_SKILLS} alt="Image Skills" />
                </BoxSkills>
            </ContentWidth>
        </SkillsStyle>
    )
}