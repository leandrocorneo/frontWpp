import React from "react";
import { useContext, useState } from "react";
import { Background, Container, InputContainer, InputMessage, MessageName, SendItems, SendMessage, UserContainerMessageLeft, UserContainerMessageRight, UserMyMessage, UserOtherMessage } from "./styles";
import { UserContext } from "../../contexts/userContext";

function ChatComponent(){

    const [message, setMessage] = useState("");
    const {handleMessage, messages, name, room} = useContext(UserContext);

    return(
        <Container>
            <Background>{messages.map((message: any, index: any) => (
                <>
                   <React.Fragment key={index}>
                        {message.name === name ? (
                            <UserContainerMessageRight>
                                <UserMyMessage>
                                    {message.message}
                                </UserMyMessage>
                            </UserContainerMessageRight>
                        ) : (
                            <UserContainerMessageLeft>
                                <UserOtherMessage>
                                    <MessageName>{message.name}</MessageName>
                                    {message.message}
                                </UserOtherMessage>
                            </UserContainerMessageLeft>
                        )}
                    </React.Fragment>
                </>
                ))}
            </Background>
            <InputContainer>
                <SendItems />
                <InputMessage 
                    placeholder="Digite sua mensagem:"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && message != '') {
                            handleMessage(message, name, room);
                        }
                    }}
                />
                <SendMessage 
                    onClick={() => handleMessage(message, name, room)} 
                />
            </InputContainer>
        </Container>
    )
}

export default ChatComponent;