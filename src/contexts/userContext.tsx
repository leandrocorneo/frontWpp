import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface UserContextProps {
  joined: boolean;
  handleLogin: (name: string, room: string) => void;
  users: any[];
  messages: any[];
  handleMessage: (message: string, name: string, room: string) => void;
  message: string;
  setMessage: (message: string) => void;
  name: string;
  setName: (name: string) => void;
  room: string;
  setRoom: (room: string) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
  const socket: Socket = io('http://localhost:5000');
  const [joined, setJoined] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const handleLogin = (name: string, room: string) => {
    socket.emit('join', { roomName: room, userName: name });
    setJoined(true);
  };

  const handleMessage = (message: string, name: string, room: string) => {
    socket.emit('message', { roomName: room, message: { name, message } });
    setMessage("");
    console.log(messages);
  };

  useEffect(() => {
    socket.on('users', (users) => setUsers(users));
    socket.on('message', (message) => setMessages((messages) => [...messages, message]));
  }, [socket]);

  return (
    <UserContext.Provider value={{
      joined,
      handleLogin,
      users,
      messages,
      handleMessage,
      message, 
      setMessage,
      name,
      setName,
      room,
      setRoom
    }}>
      {children}
    </UserContext.Provider>
  );
};
