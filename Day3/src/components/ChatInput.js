import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #575757;
    border-radius: 4px; //makes the rectangule more round

    form { //from html allows you to do something when you click 'ENTER'
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;    //takes more importance to fill the screen
            border: none;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;    //horizontal center
    align-items: center;    //vertical center
    margin-right: 5px;
    margin-left: 5px;
    cursor: pointer;
    .MuiSvgIcon-root {
        width: 18px;
    }
    :hover {
        background: #148567
        border: 1px solid black;
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`
