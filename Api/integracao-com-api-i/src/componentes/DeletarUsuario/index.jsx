import axios from "axios"
import { BotaoEditar, BotaoExcluir } from "./styles"


export default function DeletarUsuario({ id, pegarUsuariosApi }) {

    //Aqui estamos recebendo por props o id do array e a função retorna todos da lista
    //observer a função do onClick o que é passado nela e o método usado para construir
    //a requisição, no sucesso no then() também estamos usando a função que recebemos por 
    //props. 

    const excluirUsuario = () => {

        const headers = {
            headers: {
                Authorization: 'paula-oliveira'
            }
        }

        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                headers
            )
            .then((response) => {
                pegarUsuariosApi()
            })
            .catch((erro) => {
                return (erro.response)
            })


    }

    return (
        
            <BotaoExcluir onClick={() => excluirUsuario(id)}>Excluir</BotaoExcluir>
        
    )
}