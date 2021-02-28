import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import { Search } from '@material-ui/icons';


function Header({ user, signOut, themeToggler }) {

    return (
        <Container>
            <button onClick={themeToggler}>Switch Theme</button>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png" } />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: ${({ theme }) => theme.background2};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    // you can use justify-content: space-between;
    position: relative;
    box-shadow: 0 1px 0 0 ${( { theme } ) => theme.borderbottom};

    button {
        position: absolute;
        left: 5px;
        background: ${({ theme }) => theme.background};
        border: 1px solid ${({ theme }) => theme.toggleBorder};
        color: ${({ theme }) => theme.text};
        border-radius: 4px;
        cursor: pointer;
    }

    button.focus {
        outline: none;
        border: none;
        box-shadow: none;
    }

    button:active {
        outline: none;
        border: none;
        // box-shadow: 2px 2px 5px rgba(0,0,0,.35);
    }

    input[type="button"]
    {
        outline: none;
        border: none;
    }

`

const Main = styled.div`
    display: flex;
    margin-right: 16px;
    margin-left 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px ;
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    // background-color: white;

    input {
        width: 100%;
        background-color: ${( { theme } ) => theme.headsearch};
        // color: black;
        border: 1px solid ${( { theme } ) => theme.headsearchborder};
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input:focus { // When you click to text the outline that is focused is different from the input modified, so we place that outline
        width: 100%;
        color: ${( { theme } ) => theme.headsearchtext};
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;
    img {
        width: 100%;
    }
`
