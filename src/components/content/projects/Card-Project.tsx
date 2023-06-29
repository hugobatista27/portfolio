import React, { useState } from "react";
import { imageExport } from "./imageExport"
import styled, {css} from 'styled-components';
import { CardType } from "./ProjectsData";
import { FiExternalLink } from 'react-icons/fi';
import { BiFullscreen, BiLogoGithub } from 'react-icons/bi';

import ExpandedImage from "./ExpandedImage";

export type PropType = {
    projectInfo: CardType,
    showImages?: string | null,
    setShowImages: React.Dispatch<React.SetStateAction<string | null>>
}

const CardStyle = styled.div<{$img:string}>`
    width: 100%;
    height: fit-content;
    border: 1px solid #d4d4d4;
    border-radius: 20px;
    padding: 8px;
    box-shadow: 3px 5px 10px #d4d4d4;

    & > .boxImg {
        width: 100%;
        height: 270px;
        border-radius: 14px;

        position: relative;
        background: #d4d4d4 url(${props => props.$img}) no-repeat center;
        background-size: cover;
        overflow: hidden;

        .deployLink {
            position: absolute;
            top: 200px;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: 0.5s;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 21.88%, rgba(0, 0, 0, 0.589) 79.69%);

            a, button {
                width: 50px;
                height: 50px;
                transition: 0.2;
                svg {
                    display: block;
                    width: inherit;
                    height: inherit;
                    color: #fff;
                }
                &:hover {
                    transform: scale(1.1);
                }
            }
            a {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 25px;
                height: 25px;
                margin: 12px;
            }
        }
        &:hover {
            .deployLink {
                top: 0;
                visibility: visible;
            }
        }
    }

    & > .options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4px;
        button {
            padding: 8px 12px;
            border: 1px solid black;
            border-radius: 20px;
            font-size: 14px;
            
            transition: 0.2s;
            &:hover {
                background-color: black;
                color: white;
                font-weight: 500;
                transform: scale(1.1);
            }
        }
    }

    h2 {
        font-size: 20px;
        margin-top: 4px;
    }
    .stack {
        display: flex;
        align-items: center;
        gap: 8px;

        div {
            position: relative;

            span{
                display: none;
                position: absolute;
                bottom: -30px;
                left: 50%;

                white-space: nowrap;
                background-color: #fff;
                padding: 4px;
                border-radius: 4px;
                border: 1px solid #d4d4d4;
                box-shadow: 1px 1px 1px black;
                z-index: 2;
            }

            &:hover{
                span {
                    display: block;
                }

            } 
        }

        svg {
            display: block;
            height: 20px;
            width: 20px;
            transition: 0.2s;

            &:hover {
                transform: scale(1.8);
                width: 32px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 50%;
    }
`;

const ProjectDescriptionStyle = styled.div<{$show:boolean}>`
    max-height: ${props => props.$show ? '300px' : 0};
    overflow: hidden;
    transition: .5s;

    ${props =>
    props.$show &&
    css`
      padding-top: 16px;
      border-top: 1px solid #d4d4d4;
      margin-top: 16px;
    `}

    p {
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 1px;
        text-align: justify;
        padding: 0 4px;
    }

    svg {
        display: block;
        width: 26px;
        height: 26px;
        color: black;

        &:hover{
            transform: scale(1.2);
        }
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
        padding: 0 12px;
        margin-top: 8px;
    }
`;

export default function CardProject({projectInfo, setShowImages, showImages}:PropType) {
    const [showDescripiton, setShowDescripiton] = useState<boolean>(false);

    return (
        <>
            <CardStyle $img={projectInfo.img[0]}>
                <div className="boxImg">
                    <div className="deployLink">
                        {showDescripiton && (
                            <button onClick={() => setShowImages(projectInfo.name)}>
                                <BiFullscreen/>
                            </button>
                        )}
                        {!showDescripiton && (
                            <>
                                <button onClick={() => setShowImages(projectInfo.name)}>
                                    <BiFullscreen/>
                                </button>
                                <a href={projectInfo.links?.deploy} target="_blank">
                                    <FiExternalLink/>
                                </a>
                            </>
                        )}
                    </div>
                </div>
                <h2>{projectInfo.name}</h2>
                <div className="options">
                    <div className="stack">
                        {projectInfo.technologies.map((technology) => {
                            const ImgInfo = imageExport(technology)
                            return (
                                <div>
                                    <ImgInfo.img/>
                                    <span>
                                        {ImgInfo.description}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={() => setShowDescripiton(!showDescripiton)}>
                        {showDescripiton ? 'Ver Menos' : 'Ver Mais'}
                    </button>
                </div>
                <ProjectDescriptionStyle $show={showDescripiton}>
                    <p>{projectInfo.description}</p>
                    <div>
                        <a href={projectInfo.links?.repository} target="_blank">
                            <BiLogoGithub/>
                        </a>
                        <a href={projectInfo.links?.deploy} target="_blank">
                            <FiExternalLink/>
                        </a>
                    </div>
                </ProjectDescriptionStyle>
            </CardStyle>
            <ExpandedImage showImages={showImages} setShowImages={setShowImages} projectInfo={projectInfo}/>
        </>
    )
}
