import { useContext, useState } from "react";
import { Background, Container, InputContainer, InputName, Main, Message, Submit, InputRoom } from "./styles";
import { UserContext } from "../../contexts/userContext";

function Login() {
  const { name, setName } = useContext(UserContext);
  const { handleLogin, room, setRoom } = useContext(UserContext);

  const handleSubmit = () => {
    if (name.trim() !== "" && room.trim() !== "") {
      handleLogin(name, room);
    } else {
      alert('Por favor, coloque seu nome e número da sala para efetuar o login');
    }
  };

  return (
    <Main>
      <Background></Background>
      <Container>
        <Message>Seja bem vindo ao projeto WhatsApp Web</Message>
        <InputContainer>
          <InputName 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            placeholder="Digite seu nome:"
          />
          <InputRoom 
            value={room} 
            onChange={(e) => setRoom(e.target.value)} 
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            placeholder="Digite o número da sala:"
          />
          <Submit onClick={handleSubmit}>Entrar</Submit>
        </InputContainer>
      </Container>
    </Main>
  );
}

export default Login;
