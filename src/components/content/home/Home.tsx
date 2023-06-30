import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx'
import HOME_IMG from './images/home-image.png';
import { STACK_IMGS } from './images/arraryAllImages';

import { ContentWidth, HoverTechnologyStyle } from '../../../styles/global-style';
import styled from 'styled-components';

const HomeStyle = styled.div`
    padding: 40px 0;

    & > div {
        display: flex;
    }

    p {
        font-size: 18px;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        
        p {
            line-height: 140%;
        }
    }

    .contacts {
        display: flex;
        gap: 16px;

        svg {
            width: 28px;
            height: 28px;
            color: black;
            transition: .2s;
            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .stack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;

        div {
            display: flex;
            align-items: center;
            gap: 24px;

            img {
                max-height: 30px;
                max-width: 50px;
                object-fit: contain;
                transition: .2s;

                &:hover {
                    transform: scale(1.2);
                }
            }
        }
        .divider {
            width: 1px;
            background-color: #D4D4D4;
            height: 50px;
        }
    }

    @media (max-width: 1000px) {
        * {
            text-align: center;
        }

        & > div {
            align-items: center;
            flex-direction: column-reverse;
        }

        .content {
            gap: 24px;
            align-items: center;
        }

        .stack {
            width: 100%;
        }
        .home-img {
            img {
                width: 300px;
            }
        }
    }

    @media (max-width: 650px) {
        padding: 0;
        margin-top: 20px;
        //margin-bottom: 52px;

        & > div {
            width: 100%;
        }

        h1 {
            font-size: 36px;
        }

        .home-img {
            img {
                width: 75%;
            }
        }

        .message, .stack {
            p {
                font-size: 14px;
            }
        }
        .stack {
            height: 22px;
            padding: 0 12px;
            margin-top: 80px;
            div {
                height: 100%;
                gap: 14px;
                img {
                    height: 100%;
                }
            }
        }
    }
`;

export default function Home() {
    return (
        <HomeStyle id='home'>
            <ContentWidth>
                <div className='content'>
                    <h1>Desenvolvedor Front-End React</h1>
                    <div className='message'>
                        <p>Olá, me chamo Hugo! </p>
                        <p>Sou apaixonado por tecnologia e desenvolvimento web. </p>
                        <p>Moro em Santa Catarina, Brasil.</p>
                    </div>
                    <div className='contacts'>
                        <a href="https://www.linkedin.com/in/hugobatista27/" target='_blank'>
                            <RxLinkedinLogo/>
                        </a>
                        <a href="https://github.com/hugobatista27" target='_blank'>
                            <RxGithubLogo/>
                        </a>
                    </div>
                    <div className='stack'>
                        <p>Stack</p>
                        <span className='divider'></span>
                        <div>
                            {STACK_IMGS.map(image => {
                                return (
                                    <HoverTechnologyStyle>
                                        <img src={image.img} alt={image.description} />
                                        <span>{image.description}</span>
                                    </HoverTechnologyStyle>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='home-img'>
                    <img src={HOME_IMG} alt="home image" />
                </div>
            </ContentWidth>
        </HomeStyle>
    )
}