import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;

        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    #root > div {
        scroll-margin-top: 100px;
    }

    button {
        border: none;
        background-color: transparent;
        &:hover {
            cursor: pointer;
        }
    }

    h1 {
        font-size: 60px;
    }
    li {
        list-style: none;
    }

    @media (max-width: 1000px) {
        h1 {
            text-align: center;
        }

        h2 {
            font-size: 32px;
        }
    }

    @media (max-width: 650px) {
        #root > div {
            scroll-margin-top:  72px;
        }

        h1 {
            font-size: 36px;
        }

        h2 {
            font-size: 28px;
        }
    }
`

const ContentWidth = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 0 10px;
    @media (max-width: 1000px) {
        max-width: 600px;
    }
`

export {GlobalStyle, ContentWidth};