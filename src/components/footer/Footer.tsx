import styled from 'styled-components';
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx';
import { ContentWidth } from '../../styles/global-style';

const FooterStyle = styled.footer`
    border-top: 1px solid #d4d4d4;
    padding-top: 20px;
    margin-bottom: 30px;
    

    .links {
        margin-top: 16px;
        & > div a {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 8px;
            width: fit-content;
        }

        svg {
            width: 24px;
            height: 25px;
        }
        a, svg {
            color: black;
        }
    }

    @media (max-width: 650px) {
        display: flex;
        align-items: center;
        padding-top: 50px;
    }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <ContentWidth>
                <h3>
                    Hugo Batista de Siqueira - 2023
                </h3>
                <div className='links'>
                    <div>
                        <a href="https://www.linkedin.com/in/hugobatista27/" target='_blank'>
                            <RxLinkedinLogo/>
                            linkedin.com/in/hugobatista27/
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/hugobatista27" target='_blank'>
                            <RxGithubLogo/>
                            github.com/hugobatista27
                        </a>
                    </div>
                </div>
            </ContentWidth>
        </FooterStyle>
    )
}