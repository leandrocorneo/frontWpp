import React, { useContext, useState, useEffect } from "react";
import { Background, Container, InputContainer, InputMessage, MessageName, SendItems, SendMessage, UserContainerMessageLeft, UserContainerMessageRight, UserMyMessage, UserOtherMessage } from "./styles";
import { UserContext } from "../../contexts/userContext";

function ChatComponent() {
  const [message, setMessage] = useState("");
  const { handleMessage, messages, name, room } = useContext(UserContext);

  useEffect(() => {
    console.log("Current messages:", messages);
  }, [messages]);

  useEffect(() => {
    console.log("Filtered messages for room:", room, messages.filter(msg => msg.room === room));
  }, [messages, room]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      handleMessage(message, name, room);
      setMessage("");
    }
  };

  return (
    <Container>
      <Background>
        {messages.filter(msg => msg.room === room).map((msg: any, index: number) => (
          <React.Fragment key={index}>
            {msg.name === name ? (
              <UserContainerMessageRight>
                <UserMyMessage>
                  {msg.message}
                </UserMyMessage>
              </UserContainerMessageRight>
            ) : (
              <UserContainerMessageLeft>
                <UserOtherMessage>
                  <MessageName>{msg.name}</MessageName>
                  {msg.message}
                </UserOtherMessage>
              </UserContainerMessageLeft>
            )}
          </React.Fragment>
        ))}
      </Background>
      <InputContainer>
        <SendItems />
        <InputMessage 
          placeholder="Digite sua mensagem:"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <SendMessage onClick={sendMessage} />
      </InputContainer>
    </Container>
  );
}

export default ChatComponent;
