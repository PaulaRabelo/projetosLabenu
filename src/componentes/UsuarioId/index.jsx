import axios from "axios"
import { useEffect, useState } from "react"
import DeletarUsuario from "../DeletarUsuario";
import EditarUsuarios from "../EditarUsuarios";
import { User, TextoNome, BotoesContainer, BotaoEditar, Titulo } from "./styles"

export default function UsuarioId({ usuario, id, pegarUsuariosApi }) {

  //Aqui estamos recebendo por props o array, o id, e a função pegarUsuariosAPI, 
  //essa última não será usada aqui, mas precisamos fazer ela chegar no destino 
  //final.

  const [nome, setNome] = useState(usuario.name)
  const [email, setEmail] = useState('');
  const [editar, setEditar] = useState(false);

  //Criamos 3 estados aqui, observe que o estado nome está recebendo um dado do array

  //Aqui vamos criar a função pegar usuario por Id, olhe a documentação e veja o que é
  //necessario, já falei sobre isso na PaginaApi.

  //Essa função recebe um path params observer a sua url como é passado, lembra que
  //ele precisa ter uma comunicação com o nosso array e aqui fazemos isso quando trouxemos
  //por props o id e deixamos ele disponível para ser usado no código. 
  //Ainda nessa função olhe qual o retorno da API, olhe a documentação, após isso veja que 
  // no then() foi preciso colocar o estado que atualiza a informação que saí desse endpoint
  //que é o email, observer o caminho para acessamos essa informação. Use o console.log()
  //nesse caminho.

  const pegarUsuarioId = () => {

    const headers = {
      headers: {
        Authorization: 'paula-oliveira'
      }
    }
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers
      )
      .then((response) => {
        setEmail(response.data.email)
      })
      .catch((erro) => {
        return (erro.response)
      })
  }

  //Precisamos adicionar o UseEffect para evitar loop. 

  useEffect(() => {
    pegarUsuarioId()
  }, [])

  //Olhe o return desse componente
  //Aqui vamos retornar mais dois componentes o EditarUsuarios e DeletarUsuario,
  //observer o que passamos por props. 

  return (
    <User>
      <Titulo>Desenvolvedor(a)</Titulo>
      {editar ? (
        <>
          <EditarUsuarios
            nome={nome}
            setNome={setNome}
            email={email}
            setEmail={setEmail}
            usuario={usuario}
            id={id}
            pegarUsuariosApi={pegarUsuariosApi}
          />
        </>
      ) : (
        <>
          <TextoNome>Nome: {usuario.name}</TextoNome>
          <TextoNome>E-mail: {email}</TextoNome>
        </>
      )}
      <BotoesContainer>

        <BotaoEditar onClick={() => setEditar(!editar)}>Editar</BotaoEditar>

        <DeletarUsuario
          id={id}
          pegarUsuariosApi={pegarUsuariosApi}
        />

      </BotoesContainer>

    </User>
  )

}