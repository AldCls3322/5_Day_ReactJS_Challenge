import React, { useState }  from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState(""); //tracks what your are typing, starting with an empty string


    const send = (e) => {
        e.preventDefault(); //stops from refreshing the page and your message along with it
        if(!input) return;  //if there is no input then it will quit from sending nothingness
        sendMessage(input)  //after the input is change to be the message it cna just simply send it to teh database
        setInput("")
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}    //'e' is the input; and it is changing as we type
                        type="text" 
                        value={input}
                        placeholder="Message here..." />
                    <SendButton 
                        type="submit"   //allows you to send the message when you click 'ENTER'
                        onClick={send}>
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
    border: 1px solid #8D8D8E;
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
            background-color: transparent;
            color: ${({ theme }) => theme.text};
        }
        input:focus {
            outline: none;
        }
    }
`

const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;    //horizontal center
    align-items: center;    //vertical center
    margin-right: 5px;
    margin-left: 5px;
    border:none;
    cursor: pointer;
    .MuiSvgIcon-root {
        width: 18px;
    }
    :hover {
        background: #148567
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`
