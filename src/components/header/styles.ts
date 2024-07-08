import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    height: 60px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f2f5;
    border-radius:  0 10px 0 0;
    position: sticky;
    top: 0;
`;

export const ProfileContainer = styled.div`
    display: flex;
`;

export const Profile = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const TitleMessage = styled.span`
    font-size: 18px;
`;

export const Integrants = styled.span`
    color: #808080;
`;

