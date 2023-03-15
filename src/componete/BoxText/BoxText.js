import "./BoxText.css"
function Box(props){
  const placeholderModificada = `${props.placeholder}...`
    return(
    <form className="FieldText">
      <label>{props.label}</label>
       <input placeholder={placeholderModificada}/>
     </form>
   

    )
}
export default Box;