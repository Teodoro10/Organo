import "./Buttom.css"

const Botao = (props) => {
    return(
         <button className="botao">
            {props.children}
         </button>
         )
}
//o que é um children no react
export default Botao