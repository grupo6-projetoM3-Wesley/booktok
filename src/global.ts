import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #02C5B7;
    --color-gren:#83D487;
    --color-orange:#FDA456;
    --color-yellow:#FFE246;
    --color-purple:#4E2096:
    --color-white:#FFFFFF;
    --color-grey1:#EEEEEE;
    --color-grey2:#7B7F7E;
    --color-black:#000000;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
a{
    color: unset;
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
body {
    background-color:#EEEEEE;
}
`;
