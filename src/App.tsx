import ChatComponent from './components/chat-container/chat-container';
import Chat from './components/chat-messages/chat';
import Chatoptions from './components/chat-options/chatOp';
import Header from './components/header/header';
import { Background, ChatContacts, ChatContainer, ChatHeader, ChatMain, ChatMessages, Container } from './styles';
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';
import Login from './pages/login/login';

// fazer chats individuais

function App() {
    const { joined } = useContext(UserContext);

  return (
    joined ?
    <Container>
      <Background></Background>
        <ChatContainer>
          <ChatHeader>
            <Chatoptions />
            <Header />
          </ChatHeader>
          <ChatMain>
            <ChatContacts>
              <Chat/>
            </ChatContacts>
            <ChatMessages>
              <ChatComponent />
            </ChatMessages>
          </ChatMain>
        </ChatContainer>
    </Container> 
    :
    <Login />
  );
}

export default App;
