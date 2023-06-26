import styled from 'styled-components';
import { ContentWidth } from '../../styles/global-style';

const HeaderStyle = styled.header`
    border-bottom: 1px solid black;
    position: sticky;
    top: 0;
    z-index: 999;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(8px);
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 150px;

        width: 100%;
        height: 100px;

        position: relative;
        z-index: 3;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 26px;

        a {
            font-size: 18px;
            text-decoration: none;

            --s: 0.1em;   
            --c: rgb(16, 149, 193); 
            
            color: #0000;
            padding-bottom: var(--s);
            background: 
                linear-gradient(90deg,var(--c) 50%,#000 0) calc(100% - var(--_p,0%))/200% 100%,
                linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) var(--s) no-repeat;
                
            -webkit-background-clip: text,padding-box;
            background-clip: text,padding-box;
            transition: 0.5s;

            &:hover {
            --_p: 100%
            }
        }
    }

    @media (max-width: 1000px) {
        & > div {
            width: 600px;
            gap: 0;
            justify-content: space-between;
        }
    }

    @media (max-width: 650px) {
        & > div {
            max-width: 100%;
            justify-content: center;
        }
    }
`

const LogoStyle = styled.div`
    display: flex;
    flex-direction: column;
    span {
        height: 24px;
        font-size: 30px;
        font-weight: 500;
    }
`

export default function Header() {
    return (
        <HeaderStyle>
            <ContentWidth>
                <LogoStyle>
                    <span>HU</span>
                    <span>GO</span>
                </LogoStyle>
                <nav>
                    <a href="">HOME</a>
                    <a href="">SKILLS</a>
                    <a href="">PROJECTS</a>
                </nav>
            </ContentWidth>
        </HeaderStyle>
    )
}