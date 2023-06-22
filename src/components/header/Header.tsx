import styled from 'styled-components';
import { ContentWidth } from '../../styles/global-style';

const HeaderStyle = styled.header`
    border-bottom: 1px solid black;
    & > div {
        display: flex;
        align-items: center;
        gap: 150px;

        width: 100%;
        height: 100px;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 26px;

        button {
            font-size: 18px;
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
                    <button>HOME</button>
                    <button>SKILLS</button>
                    <button>PROJECTS</button>
                </nav>
            </ContentWidth>
        </HeaderStyle>
    )
}