import styled from 'styled-components';

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    gap: 150px;

    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;

    h1 {
        font-size: 30px;
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

export default function Header() {
    return (
        <HeaderStyle>
            <h1>HUGO</h1>
            <nav>
                <button>HOME</button>
                <button>SKILLS</button>
                <button>PROJECTS</button>
            </nav>
        </HeaderStyle>
    )
}