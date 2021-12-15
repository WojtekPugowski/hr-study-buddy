import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

html {
box-sizing: border-box;
}

*, *::before, *::after {
box-sizing: inherit
}

body {
font-family: 'Montserrat', sans-serif;
}

a, button {
font-family: 'Montserrat', sans-serif;
}
`;
