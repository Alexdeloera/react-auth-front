interface iShowquote{
  quote:string
}
export const ShowQuote:React.FC<iShowquote>= ({quote}) => {
  return (
    <>
      {quote?<h1> You quote is</h1>:<h1> you don't have a quote</h1>}
      {quote && <h2>{quote}</h2>}
    </>
  )
}