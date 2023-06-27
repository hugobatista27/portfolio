import { useState } from "react";
import { imageExport } from "./imageExport"
import styled, {css} from 'styled-components';
import GITHUB_LOGO from './images/github-icon.png';
const IMG_LINK = "https://cdn-icons-png.flaticon.com/512/74/74910.png";

type LinksType = {
    repository?: string,
    deploy?: string
}

type CardType = {
    name: string,
    img: string,
    technologies: string[],
    description: string,
    links?: LinksType
}

type PropType = {
    projectInfo: CardType
}

const CardStyle = styled.div<{$img:string}>`
    width: 360px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 8px;


    & > .boxImg {
        width: 100%;
        height: 200px;
        border-radius: 14px;

        position: relative;
        background-image: url(${props => props.$img});
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        .deployLink {
            visibility: visible;
            position: absolute;
            top: 200px;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: 0.5s;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 21.88%, rgba(0, 0, 0, 0.28) 79.69%);

            a {
                width: 50px;
                height: 50px;
                img {
                    width: 100%;
                }
            }
        }
    }
    &:hover {
        .deployLink {
            top: 0;
            visibility: visible;
        }
    }

    & > .options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4px;
    }

    h2 {
        font-size: 20px;
        margin-top: 4px;
    }
    .stack {
        display: flex;
        align-items: center;
        gap: 8px;

        height: 20px;
        img {
            height: 100%;
        }

    }
    button {
        padding: 8px 12px;
        border: 1px solid black;
        border-radius: 20px;
        font-size: 14px;
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

    img {
        width: 26px;
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

export default function CardProject({projectInfo}:PropType) {
    const [showDescriprion, setShowDescriprion] = useState<boolean>(false);

    return (
        <CardStyle $img={projectInfo.img}>
            <div className="boxImg">
                <div className="deployLink">
                    <a href={projectInfo.links?.deploy}>
                        <img src={IMG_LINK} alt="" />
                    </a>
                </div>
            </div>
            <h2>{projectInfo.name}</h2>
            <div className="options">
                <div className="stack">
                    {projectInfo.technologies.map((technology) => {
                        const imgInfo = imageExport(technology)
                        return (
                            <img src={imgInfo.img} alt={imgInfo.description} />
                        )
                    })}
                </div>
                <button
                    onClick={() => setShowDescriprion(!showDescriprion)}
                >
                    Ver Mais
                </button>
            </div>
            <ProjectDescriptionStyle $show={showDescriprion}>
                <p>{projectInfo.description}</p>
                <div>
                    <a href={projectInfo.links?.repository} target="_blank">
                        <img src={GITHUB_LOGO} alt="github" />
                    </a>
                    <a href={projectInfo.links?.deploy} target="_blank">
                        <img src={IMG_LINK} alt="deploy" />
                    </a>
                </div>
            </ProjectDescriptionStyle>
        </CardStyle>
    )
}