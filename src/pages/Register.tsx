import { useState } from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm"
import { IUserRegister } from "../store/users/initialState";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (values: IUserRegister) => {
    try {
      await axios.post(
        'http://localhost:3010/api/register',
        values
      )
      setMessage('usuario registrado de manera satisfactioria')
      navigate('/login');
    } catch (error) {
      console.log(error);
      setMessage('hubo un error por favor intente de nuevo')
    }
  }

  return (
    <>
      {message !== '' && <h1>{message}</h1>}
      <RegisterForm onSubmit={onSubmit} />
    </>
  )

}