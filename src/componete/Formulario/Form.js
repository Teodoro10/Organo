import "./Form.css"
import Box from  "../BoxText/BoxText"
import Botao from "../Botao/Buttom"

export default function Form(){
 function save(event){
    event.preventDefault()
 }
    return(
        <section className="employee-form">
           <form onSubmit={save}>
        <h1> Prencha os campos a baixo</h1>
        <Box label="Nome" placeholder="Digite seu nome"/>
        <Box label="Cargo" placeholder="Digite seu cargo"/>
        <Box label="Imagem" placeholder="Informe o endereço da imagem"/>
        <Botao>
            Criar Card
        </Botao>
            </form>
        </section>
    )
}