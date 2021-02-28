import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#FFFFFF',
    text: '#363537',
    background: '#F5F5F5', //#363537
    background2: "#FF8C00",
    border: "#C0C0C0",

    //COLORS
    // LightOrange: #FFA500  // Organge: #FF8C00 // Orange2: #FF9900    // Orange3: #FF891E // DarkishOrange: #E18A07
    // DarkishGray: #7C7C7C // LightGray: #C0C0C0   //LighterGray: rgba(83, 39, 83,.13) // DarkishGary2: #8E8E8E
    // Black: rgb(104 74 104)
    // WhiteTransparente: rgb(255 255 255 / 10%)

    borderbottom: "#8E8E8E",
    headsearch: "#FFA500",
    headsearchtext: "#FFFFFF",
    headsearchborder: "rgb(255 255 255 / 50%)",
    toggleBorder: "#000000",

    sidebarbackground: "#FF891E",
    sidebarbottom: "#C4C4C4",
    sidebartext: "rgb(255 255 255 / 70%)",
    sidebarhovercolor: "#F98500",
}

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    background: '#363537', //#999
    background2: "#350d36",
    border: "#8D8D8E",

    //COLORS
    //

    borderbottom: "rgb(255 255 255 / 10%)",
    headsearch: "#FFFFFF",
    headsearchtext: "#000000",
    headsearchborder: "#8D8D8E",
    toggleBorder: "#FFFFFF",

    sidebarbackground: "#3F0E40",
    sidebarbottom: "#532753",
    sidebartext: "rgb(188,171,188)",
    sidebarhovercolor: "#350D36",
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
