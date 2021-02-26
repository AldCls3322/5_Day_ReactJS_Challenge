import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom'    //function that links the ID of the firebase seen in the webpage to the room/"channelId of the 'ROUTE' componenet in App.js 
import firebase from "firebase" //you import fierbase from firebase module

function Chat({ user }) {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState([])

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = { //payload is the data of the text message.
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),  //firebase transforms the timestamp to wherever you are at.
                user: user.name,
                userImage: user.photo
            }
            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }

    const getChannel = () => {  //to make tha chat change according to the channels
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{ //takes 'picture' of the current channel to next setChannel; whenever the channel changes it will retake the 'picture' to the new current channel
            setChannel(snapshot.data());
        })
    }

    useEffect(()=>{
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                    # { channel && channel.name}
                    </ChannelName>
                    <ChannelInfo>
                    Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                {
                    messages.length > 0 &&  //the '&&' are basically an 'if' to jsut make sure there are messages in the data base for it t loop.
                    messages.map((data, index)=>(   //loop every single message
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}/>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content; //it establiches rows, there are 3, one with 64px, other fill screen, and last with min-content (minimum size according to the content)
    min-height: 0;  //to later prevent from the history of messages to opcuppy the longest page.
`

const Channel = styled.div`

`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)` //here it is loaded the icon of 'info'
    margin-left: 10px;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83,.13);
    justify-content: space-between;
`

const MessageContainer = styled.div`    //to prevent from making the message history from taking a lot of space and your scrolling being to all the webpage, we do this:
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`