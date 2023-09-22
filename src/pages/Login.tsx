import { useEffect, useState } from "react";
import { LoginForm, iLogin } from "../components/LoginForm/LoginForm";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { deleteUser, setUser } from "../store/login/actions";
import axios from "axios";


export const Login = () => {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(deleteUser());
  }, [])

  const logSubmit = async (values: iLogin) => {
    try {
      const res= await axios.post(
        'http://localhost:3010/api/login',
         values
      )
      dispatch(setUser(res.data))
      if(res.data.user){
        navigate('/dashboard');
      }else{
        setMessage('usuario o contraseña invalidos')
      }
    } catch (error) {
      setMessage('error')
    }
  }

  return (
    <>
      <h1>{message}</h1>
      <LoginForm logSubmit={logSubmit} />
    </>
  )
}