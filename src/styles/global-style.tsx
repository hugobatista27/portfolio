import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;

        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    #root {
        max-width: 1000px;
        margin: auto;
    }

    button {
        border: none;
        background-color: transparent;
        &:hover {
            cursor: pointer;
        }
    }

    a {
        list-style: none;
    }
`

export {GlobalStyle};