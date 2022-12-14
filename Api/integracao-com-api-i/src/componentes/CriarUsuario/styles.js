import styled from "styled-components";

export const ContainerCriar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    width: 25vw;
    border: 2px solid black;
    padding: 10px;
`

export const TextPrincipal = styled.h2`
    font-size: 25px;
    align-self: center;
`

export const InputAdicionar = styled.input`
    height: 6vh;
    width: 23vw;
    border-radius: 5px;
    padding: 5px;
`

export const BotaoAdicionar = styled.button`
    height: 6vh;
    width: 23vw;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    background-color: #729663;
    color: #ffffff;

    :active{
        background-color: #44EE77;
        color: #ffffff;
    }
`