import axios from "axios";
import { BotaoSalvar, ContainerEditar, InputEditar, Inputs, TextoEditar } from "./styles";


export default function EditarUsuario({ usuario, nome, email, setNome, setEmail, 
    id, pegarUsuariosApi }) {

        //observer o que estamos recebendo por props o retorno do array de usuarios o usuario, nome, email
        //a função do nome e do email, o id do array e a função que pega todos os usuarios.

        //para entender essa API de forma escrita vou precisar que você siga a minha explicação
        //Primeiro passo você precisa fazer a função que aqui chamei de editarUsuario
        //Após isso olhe a documentação e veja o que é exigido e observer como eu fiz dentro dela. 
        //Quando for passar a url olhe o metodo que será usado e o que é pedido, tudo está na documentação,
        // precisamos passar o id e já recebemos ele por props. 
        //É necessario receber dados na nossa função e para isso colocamos esse dado na chamada da função,
        //busque pelo onClick que tem essa função e como está escrito.  
        //Observer na documentação como é chamado as propriedades do body, use esses mesmos nomes na passagem
        //de dados para a função. 
        //Na resposta de sucesso que é then() passamos dentro dele a função que vem por props para pegar a
        //o array e ao mesmo tempo ela atualiza as informações.
        //Se algo ficou confuso, tente codar junto com essa explicação. 



    const editarUsuario = (name, email) => {

        const headers = {
            headers: {
                Authorization: 'paula-oliveira'
            }
        }
        const body = {
            name,
            email
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, body, headers)

            .then((resposta) => {
                pegarUsuariosApi()

            })
            .catch((erro) => {
                return (erro.response)
            })

    }

    return (
        <ContainerEditar>
            <TextoEditar>
                <p>Nome: {usuario.name}</p>
                <p>E-mail: {email}</p>
            </TextoEditar>

            <InputEditar>
                <Inputs
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />

                <Inputs
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </InputEditar>

            <BotaoSalvar onClick={() => editarUsuario(nome, email)}>Salvar</BotaoSalvar>
        </ContainerEditar>

    )

}