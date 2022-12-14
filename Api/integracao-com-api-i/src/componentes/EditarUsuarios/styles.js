import styled from "styled-components";

export const ContainerEditar = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        'texto .'
        'input botao';
`

export const TextoEditar = styled.div`
    grid-area: texto;
    
`
export const InputEditar = styled.div`
    grid-area: input;
    
    align-self: center;
`
export const Inputs = styled.input`
    border: 2px solid black;
    border-radius: 3px;
    margin: 2px 0px;
   padding: 2px;
   border: none;
`
export const BotaoSalvar = styled.button`
    grid-area: botao;
    width: 6vw;
    height: 8vh;
    justify-self: center;
    border-radius: 8px;
    background-color: #44EE77;
    border: none;
    color: #fff;
    text-shadow: 1px 1px #000000;

    :active{
        background-color: #B4F8C8;
        color: #ffffff;
    }
`