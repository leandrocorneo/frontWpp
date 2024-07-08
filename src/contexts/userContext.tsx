import { createContext, useEffect, useState } from "react";
import socket from 'socket.io-client';

export const UserContext = createContext({} as any);

export const UserStorage = ({children} : any) => {

    const io = socket('http://localhost:5000');
    const [joined, setJoined] = useState(false);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<any[]>([]);

    const handleLogin = (name: string) => {
        io.emit('join', name);
        setJoined(true);
    }

    const handleMessage = (message: string, name: any) => {
        io.emit('message', {message, name});
        console.log(messages)
    }

    useEffect(() => {
      io.on('users', (users) => {setUsers(users)}) 
      io.on('message', (message) => 
        setMessages((messages) => [...messages, message]))
    }, [])

    return(
        <UserContext.Provider value={{
            joined,
            handleLogin,
            users,
            messages,
            handleMessage,
            message, 
            setMessage,
            name,
            setName
            
        }}>
            {children}
        </UserContext.Provider>
    )
}