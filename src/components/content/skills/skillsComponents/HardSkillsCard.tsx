import { useState } from 'react';
import styled from 'styled-components';
import { HardSkills, ClassNameType } from '../data';
import { IoIosArrowDown } from 'react-icons/io';

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
            @media (min-width: 650px) {
                height: 74px;
                gap: 0 24px;
                overflow: hidden;
                box-sizing: content-box;
                padding-bottom: 10px;
                flex-wrap: wrap;

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
                flex-wrap: nowrap;
                box-sizing: content-box;
                overflow: hidden;
                margin-bottom: 10px;
                max-height: 0;
                transition: max-height 0.4s ease;
            }
            .expanded {
                max-height: 200px;
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


export default function HardSkillsCard() {
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
                                    <IoIosArrowDown/>
                                </button>
                            </div>
                            <ul className={verifyShowSkill(obj.className) ? 'expanded' : ''}>
                                {obj.skills.map((skill, index) => <li key={skill + index}>
                                    {skill}
                                </li>)}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </HardSkillsStyle>
    )
}