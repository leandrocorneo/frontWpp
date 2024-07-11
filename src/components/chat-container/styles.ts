import styled from "styled-components";
import BackgroundImage from '../../assets/background5.png';
import SendIcon from '../../assets/enviado.png';
import SendMore from '../../assets/mais.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Background = styled.span`
    position: absolute;
    height: calc(100% - 150px);
    width: calc(70% - 1px);
    background-image: url(${BackgroundImage});
    box-sizing: border-box;
    overflow-y: auto;

    &::-webkit-scrollbar{
        height: 20px;
        width: 6px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #8c8c8c;
        border-radius: 20px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    background-color: #f0f2f5;
    position: absolute;
    bottom: 0;
    width: calc(70% - 1px);
    z-index: 100;
    padding: 5px 16px;
    box-sizing: border-box;
    border-radius: 0 0 10px 0 ;
`;

export const InputMessage = styled.input`
    width: 80%;
    height: 25px;
    font-size: 16px;
    border: none;
    padding: 10px;
    border-radius: 5px;
`;

export const SendMessage = styled.span`
    width: 40px;
    height: 40px;
    background-image: url(${SendIcon});
    background-size: cover;
    cursor: pointer;
`;

export const SendItems = styled.span`
    width: 40px;
    height: 40px;
    background: url(${SendMore});
    background-size: cover;
    cursor: pointer;
`;

export const UserContainerMessageRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 2px 0;
    z-index: 3;
`;

export const UserContainerMessageLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 2px 0;
`;

export const UserMyMessage = styled.span`
    display: flex;
    flex-direction: column;
    background-color: #dcf8c6;
    padding: 10px;
    border-radius: 5px;
`;

export const MessageName = styled.span`
    color: #3b5998;  
    font-size: 13px;
    font-weight: 500;
`;

export const UserOtherMessage = styled.span`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
`;