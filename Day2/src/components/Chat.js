import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    return (
        <Container>
            <ChatHeader>
                <TopChatHeader>
                    <ChannelName>#CHANNEL</ChannelName>
                    <MoreInfoContainer>
                        <MoreInfoText>
                            Details
                        </MoreInfoText>
                        <InfoOutlinedIcon />
                    </MoreInfoContainer>
                </TopChatHeader>
                <ChannelDetails>Here will be a brief description of the channel</ChannelDetails>
            </ChatHeader>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    background: white;
`

const ChatHeader = styled.div`
    height: 64px;
    padding-left: 4px;
    border-bottom: 1px solid  #A0A0A0;
`

const TopChatHeader = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    margin: 0;
    padding-right: 4px;
    padding-left: 12px;
    justify-content: space-between;
`

const ChannelName = styled.div`
    font-weight: bold;
`

const MoreInfoContainer = styled.div`
    display: flex;
`

const MoreInfoText = styled.div`
    padding-right: 4px;
`

const ChannelDetails = styled.div`
    font-size: 12px;
    margin: 0;
    padding: 0;
`