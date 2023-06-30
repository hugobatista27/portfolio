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

const HoverTechnologyStyle = styled.div`
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
`;

export {GlobalStyle, ContentWidth, HoverTechnologyStyle};