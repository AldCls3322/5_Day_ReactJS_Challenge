import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '', //#FF8C00 #FFA500
    background: '#F5F5F5', //#363537
    background2: "#FF8C00",
    bordercolor: "rgba(83, 39, 83,.13)",    // box-sahow: rgb(255 255 255 / 10%)
    border2: "rgb(104 74 104)", 
}

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '',
    background: '#363537', //#999
    background2: "#350d36",
    bordercolor: "#8D8D8E",
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${( { theme } ) => theme.body};
        color: ${({ theme }) => theme.text};
        border-color: ${({ theme }) => theme.bordercolor};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transitiom: all 0.50s linear;
    }
`
