import styled from "styled-components"

export const Container = styled.div`
    width: 27.6%;
    height: 60px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f2f5;
    border-radius: 10px 0 0 0;
    position: sticky;
    top: 0;
`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Profile = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const OptionsMenu = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1024px){
        display: none;
    }
`;

export const Options = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    padding: 8px;

    &:hover{
        background-color: #f2f2f2;
    }
`;