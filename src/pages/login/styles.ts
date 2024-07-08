import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Background = styled.div`
    background-color: #075e54;
    height: 20%;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const Message = styled.span`
    color: black;
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    font-size: 1.5rem;
`;

export const Container = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    position: fixed;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 450px;
    gap: 100px;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const InputName = styled.input`
    display: flex;
    width: 250px;
    height: 45px;
    border: none;
    outline: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
    padding: 10px;
`;

export const InputRoom = styled.input`
    display: flex;
    width: 250px;
    height: 45px;
    border: none;
    outline: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
    padding: 10px;
`;

export const Submit = styled.button`
    width: 250px;
    height: 40px;
    border-radius: 5px;
    background-color: #075e54;
    border: none;
    color: #fff;
    cursor: pointer;
`;