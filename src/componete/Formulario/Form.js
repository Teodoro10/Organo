import "./Form.css"
import Box from  "../BoxText/BoxText"

export default function Form(){
    return(
        <section className="employee-form">
           <form>
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <Box label="Nome" placeholder="Digite seu nome"/>
        <Box label="Cargo" placeholder="Digite seu cargo"/>
        <Box label="Imagem" placeholder="Informe o endereço da imagem"/>
       
            </form>
        </section>
    )
}