import styled from "styled-components";

export const User = styled.div`
    border: #ffffff 2px solid;
    border-radius: 10px ;
    width: 25vw;
    height: 35vh;
    margin-top: 20px;
    padding: 10px;
    background-color: #4B8378;
    color: #ffffff;
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-evenly;
`
export const Titulo = styled.h3`
    border-bottom: #ffffff 2px solid;
    margin-top: 5px;
`

export const TextoNome = styled.p`
    font-size: 20px;
`
export const BotoesContainer = styled.div`
    align-self: flex-end;
    
`
export const BotaoEditar = styled.button`
    padding: 5px;
    border-radius: 8px;
    border: #F0A160 0.5px solid;
    margin: 4px;
    background-color: #F0A160;
    color: #fff;
    text-shadow: 1px 1px #000000;

    :hover{
        background-color: #FFB001;
        color: #ffffff;
    }
`
