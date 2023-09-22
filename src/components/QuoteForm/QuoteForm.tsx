
interface iQuoteForm{
  handleClick:(e:React.MouseEvent<HTMLButtonElement>)=>void,
  handleChange:(e:React.FormEvent<HTMLInputElement>)=>void
}
export const QuoteForm:React.FC<iQuoteForm> = ({handleClick,handleChange}) => {
  return(
    <div>
      <input 
      type="text" 
      placeholder="you new quote"
      onChange={handleChange}
      />
      <button onClick={(e)=>handleClick(e)}>Subir</button>
    </div>
  )
}