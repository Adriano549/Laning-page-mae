import styled from "styled-components";
import Fundo from "@img/logo/fundo.png"

export const Section = styled.section`
    position: relative;
    height: 100vh;
    &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7)), url(${Fundo});
    z-index: -1;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    h1 {
    font-size: 48px;
    text-align: center;
    color: #e0abf1;
    }
    p {
    color: #413b3b;
    }
`;

export const LabDiv = styled.div`
    text-align: center;
    margin-top: 20px;
    h3 {
    color: #585af7;
    }
    p {
    font-size: 30px;
    &:hover {
    transform: scale(1.5);
    }
    } 
`;