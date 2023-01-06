import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #02C5B7;
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
    background-color: var(--gray-0);
}
`;
