import { MouseEventHandler, useState } from "react";
import { ShowQuote } from "../components/ShowQuote/ShowQuote";
import {useAppSelector } from "../store/hooks"
import axios from "axios";
import { QuoteForm } from "../components/QuoteForm/QuoteForm";

export const Dashboard = () => {
  const [quote,setQuote]= useState('')
  const [newQuote,setNewQuote]=useState('')
  const log=useAppSelector((state)=>state.login);

  const getQuote=async()=>{
    const data={name:log.user}
    try {
      const message=await axios.post(
        'http://localhost:3010/api/quote',
        data
      )
      setQuote(message.data.quote);
    } catch (error) {
      console.log('dont work');
    }
  }
  getQuote();
  const handleChangue=(e:React.FormEvent<HTMLInputElement>)=>{
    e.preventDefault();
    console.log(e);
    const target = e.target as HTMLInputElement
    setNewQuote(target.value)
  }

  const handleClick=async(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    const data={name:log.user,quote:newQuote}
    try {
      const res=await axios.patch(
        'http://localhost:3010/api/quote/edit',
        data
      )
      setQuote(res.data.quote)
    } catch (error) {
      
    }
    
  }
  
  return(
    <>
    <h1>bienvenido {log.user}</h1>
    <ShowQuote quote={quote}/>
    <QuoteForm handleChange={handleChangue} handleClick={handleClick}/>
    </>
  )
}