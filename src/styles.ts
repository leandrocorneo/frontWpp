import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ece5dd;
`;

export const Background = styled.div`
    background-color: #075e54;
    height: 20%;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const ChatContainer = styled.div`
    width: 95%;
    max-width: 1700px;
    height: 95%;
    background-color: #fff;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

export const ChatHeader = styled.div`
    display: flex;
`;

export const ChatContacts = styled.div`
    width: 30%;
    border-right: 1px solid #e6e6e6;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        height: 20px;
        width: 6px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #8c8c8c;
        border-radius: 20px;
    }
`;

export const ChatMessages = styled.div`
    width: 70%;
    height: 100%;
    border-radius: 0 0 10px 0 ;
`;

export const ChatMain = styled.div`
    display: flex;
    height: calc(100% - 80px);
`;