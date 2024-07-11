import { ChannelImage, ChatItem, LastMessage, TitleContainer, TitleMessage } from "./styles";
import Profile from '../../assets/Profile.jpg';
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function Chat() {
  const { users, room } = useContext(UserContext);

  return (
    <ChatItem>
      <ChannelImage src={Profile} alt="" />
      <TitleContainer>
        <TitleMessage>Sala: {room}</TitleMessage>
        <LastMessage>
          {users.map((user: any, index: number) => (
            <span key={index}>{index !== 0 && ', '} {user.name}</span>
          ))}
        </LastMessage>
      </TitleContainer>
    </ChatItem>
  );
}

export default Chat;
