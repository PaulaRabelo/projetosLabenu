import axios from "axios";
import { useState } from "react";
import { BotaoAdicionar, ContainerCriar, InputAdicionar, TextPrincipal } from "./styles";


export default function CriarUsuario({ pegarUsuariosApi }) {

  //recebemos por props a função pegar todos os usuarios, recomendo que leia a requisição editarUsuario
  // se ainda não foi lá e depois voltar aqui. Nessa e feito quase o mesmo processo, mas aqui estamos 
  //usando os inputs. Observer e coloque no forum caso tenha dúvidas. 

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

    const criarNovoUsuario = (name, email) =>{
      const headers = {
        headers:{
          Authorization: 'paula-oliveira'
        }
      }

      const body = {
        name,
        email
    }
      axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
      body, headers)

      .then((response) =>{
        pegarUsuariosApi()
        setEmail('')
        setNome('')
       
      })
      .catch((erro) =>{
        return(erro.response)
      })
    }
   

    return (
        <ContainerCriar>
        <TextPrincipal>Novo usuário</TextPrincipal>
        <InputAdicionar
          placeholder={"Nome"}
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <InputAdicionar
          type="email"
          placeholder={"E-mail"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <BotaoAdicionar onClick={()=> 
          criarNovoUsuario(nome, email)}>Adicionar</BotaoAdicionar>
      </ContainerCriar>
    )

}