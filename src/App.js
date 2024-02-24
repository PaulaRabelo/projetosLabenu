import { useState } from "react";
import Header from "./componentes/Header";
import { GlobalStyle } from "./GlobalStyle";
import PaginaApi from "./pagina";


function App() {

  const [usuarioApi, setUsuarioApi] = useState([])

  //declarei o estado que está recebendo um array
  //vamos passar por props ele para a página PaginaAPi

  return (

    <>
      <GlobalStyle />

      <Header/>
      
      <PaginaApi
      usuarioApi={usuarioApi}
      setUsuarioApi={setUsuarioApi}
      />

    </>
  );
}

export default App;
