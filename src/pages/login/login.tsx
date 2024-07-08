import { useContext, useState } from "react";
import { Background, Container, InputContainer, InputName, Main, Message, Submit } from "./styles";
import { UserContext } from "../../contexts/userContext";

function Login(){

    const {name, setName} = useContext(UserContext);
    const {handleLogin} = useContext(UserContext);

    const handleSubmit = () => {
        if(name.trim() !== ""){
            handleLogin(name); 
        }
        else{
            alert('Por favor, coloque seu nome para efetuar o login');
        }
    };

    return(
        <Main>
            <Background></Background>
            <Container>
                <Message>Seja bem vindo ao projeto WhatsApp Web</Message>
                <InputContainer>
                    <InputName 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit();
                            }
                        }}
                        placeholder="Digite seu nome:"
                    />
                    <Submit onClick={() => handleSubmit()}>Entrar</Submit>
                </InputContainer>
            </Container>
        </Main>
    )
}

export default Login;