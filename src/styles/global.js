import { createGlobalStyle } from "styled-components";
import img from "../assets/por-do-sol-background.jpg";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #20C4FA;
        --white: #FFFFFF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --background-blur: rgba(12,44,57,0.5); 
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        };

        @media (max-width: 720px) {
            font-size: 87.5%;
        };
    }

    body {
        height: 100vh;
        background-image: url(${img});
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`