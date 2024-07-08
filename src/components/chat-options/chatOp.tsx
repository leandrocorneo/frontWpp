import { Container, Options, OptionsContainer, OptionsMenu, Profile, ProfileContainer } from "./syles";
import ProfileIcon from "../../assets/Profile.jpg";
import ComunityIcon from '../../assets/comunidade.png';
import StatusIcon from '../../assets/status.png';
import ChannelsIcon from '../../assets/chat-de-voz.png';
import NewChatIcon from '../../assets/comente.png';
import MoreOptions from '../../assets/tres-pontos.png';

function Chatoptions(){
    return(
        <Container>
            <ProfileContainer>
                <Profile src={ProfileIcon} />
            </ProfileContainer>
            <OptionsContainer>
                <OptionsMenu>
                    <Options src={ComunityIcon} />
                    <Options src={StatusIcon} />
                    <Options src={ChannelsIcon} />
                    <Options src={NewChatIcon} />
                    <Options src={MoreOptions} />
                </OptionsMenu>
            </OptionsContainer>
        </Container>
    )
}

export default Chatoptions;