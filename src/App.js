
import Banner from "./componete/Banner/Banner.js";
 import Form from "./componete/Formulario/Form"
 import Box from "./componete/BoxText/BoxText"

function App() {
  return (
    <div className="App">
      <Banner/>
      {/* <Box label="Nome" placeholder="Digite seu nome"/>
      <Box label="Cargo" placeholder="Digite seu cargo"/>
      <Box label="Imagem" placeholder="Informe o endereço da imagem"/>
        */}
        <Form/>
       </div>
   
  );
}

export default App;
