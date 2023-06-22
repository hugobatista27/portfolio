import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;

        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    button {
        border: none;
        background-color: transparent;
        &:hover {
            cursor: pointer;
        }
    }

    li {
        list-style: none;
    }
`

const ContentWidth = styled.div`
    max-width: 1000px;
    margin: auto;
`

export {GlobalStyle, ContentWidth};