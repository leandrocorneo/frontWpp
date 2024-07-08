import { Container, Integrants, Profile, ProfileContainer, TitleContainer, TitleMessage } from "./styles";
import ProfileIcon from '../../assets/Profile.jpg';
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function Header(){

    const {users} = useContext(UserContext);

    return(
        <Container>
            <ProfileContainer>
                <Profile src={ProfileIcon}/>
                <TitleContainer>
                    <TitleMessage>Sala 1</TitleMessage>
                    <Integrants>
                        {users.map((user: any, index: any) => (
                            <span>{index !== 0 && ','} {user.name}</span>
                        ))}
                    </Integrants>
                </TitleContainer>
            </ProfileContainer>
        </Container>
    )
}

export default Header;