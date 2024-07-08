import styled from "styled-components";

export const ChatItem = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
        background-color: #f0f2f5;
    }
    
`;

export const ChannelImage = styled.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const LastMessage = styled.span`
    color: #808080;
`;

export const TitleMessage = styled.span`
    font-size: 18px;
`;
