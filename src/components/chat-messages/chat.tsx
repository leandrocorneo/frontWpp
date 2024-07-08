import { ChannelImage, ChatItem, LastMessage, TitleContainer, TitleMessage } from "./styles";
import Profile from '../../assets/Profile.jpg';
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
function Chat(){

    const {users} = useContext(UserContext);

    return(
        <ChatItem>
            <ChannelImage src={Profile} alt=""/>
            <TitleContainer>
                <TitleMessage>Sala 1</TitleMessage>
                <LastMessage>
                    {users.map((user: any, index: any) => (
                        <span>{index !== 0 && ','} {user.name}</span>
                    ))}
                </LastMessage>
            </TitleContainer>
        </ChatItem>   
    )
}

export default Chat;