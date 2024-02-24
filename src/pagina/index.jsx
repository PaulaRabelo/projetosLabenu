import axios from "axios";
import { useEffect, useState } from "react";
import CriarUsuario from "../componentes/CriarUsuario";
import UsuarioId from "../componentes/UsuarioId";
import { ContainerLista, CorDeFundo } from "./styles";


export default function PaginaApi({ usuarioApi, setUsuarioApi }) {

    //como passamos por props, agora estamos recebendo a props na função
    //aqui ela está já desestruturada

    //nessa página precisamos passar o elemento que irá pegar todos na API,
    //fazemos isso criando uma função, a função pode ter qualquer nome, mas 
    //pra mim fez mais sentido chamar de pegarUsuariosAPI.

    //Olhe a documentação antes de fazer a API, aqui estamos passando o método
    //get a url correspondente e o headers, são obrigatórios nessa requisição
    //olhe a sintase do axios, ela será repetida em todas as APIS que estamos 
    //fazendo. 

    //Quando precisamos mostrar ao na tela e nesse dado está em uma API, precisamos
    //de um array no nosso código, aqui nós recebemos ele por props desestruturada
    //e para consumir o returno da nossa API passamos a função do estado que atualiza
    //o estado, olhe a linha 37, ou a linha que está dentro do then(), lá estamos pegando
    //o resultado para nossa API. Lembre sempre de usar o console.log() para poder ajudar
    //Role o código e vá para o map.

    const pegarUsuariosApi = () => {

        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
                {
                    headers: {
                        Authorization: 'paula-oliveira'
                    }
                })
            .then((response) => {
                setUsuarioApi(response.data)
            })
            .catch((error) => {
                return (error.response)
            })
    }

    //vamos precisar adicionar o useEffect na tela também, pois ele vai deixar
    //nossa aplicação dinâmica e sem loop. Apenas foi adicionado o nome da função
    // que criamos para a API. 

    useEffect(() => {
        pegarUsuariosApi()
    }, [])


    //Aqui estamos consumindo o nosso array de usuário com o map, renderizamos 
    //a lista na tela. 

    //No return do map colocamos um componente, mas já vamos falar dele. Observer
    //no return da função do componente como estamos chamando o map para ser exibido.

    //Dentro do return do map tem um componente e nele aqui estamos passando como props
    //tudo que será necessário para o próximo componente, lembrando que é necessário ter 
    //uma key para o map não dar erro no console.log() e como vamos usar o id do array, 
    //pegamos ele aqui.

    const arrayUsuarios = usuarioApi.map((usuario) => {
        return (
            <UsuarioId
                key={usuario.id}
                id={usuario.id}
                usuario={usuario}
                pegarUsuariosApi={pegarUsuariosApi}
            />
        )
    })

    //No returno estamos passando dois componetens, um que está dentro do array, por isso
    //chamamos o array e o outro que vai criar os nossos usuários, na criação do usuário 
    //precisamos que ele já mostre pra gente na tela o usuário, para isso precisamos da
    //da função que renderiza na tela, aqui passamos ela por props. 

    //Agora abra o componente UsuarioId

    return (
       
            <ContainerLista>
                <CriarUsuario
                    pegarUsuariosApi={pegarUsuariosApi}
                />
                {arrayUsuarios}
            </ContainerLista>
        
    )
}