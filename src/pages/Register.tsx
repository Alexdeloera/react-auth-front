import { useState } from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addUser } from "../store/users/actions";
import { IUserRegister } from "../store/users/initialState";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const Register = () => {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.users);

  const onSubmit = (values: IUserRegister) => {
    const data = { ...values, id: uuidv4() };

    if (data.email == '' || data.name == '' || data.password == '') {
      alert('por favor llene todos los campos correctamente');
    } else {
      console.log('register', data);
      const validateDuplicate = users.find((item) => item.name === data.name);
      console.log('duplicate', validateDuplicate);

      if (validateDuplicate) {
        setMessage('el nombre de usuario ya existe')
      } else {
        try {
          dispatch(addUser(data));
          localStorage.setItem('users', JSON.stringify([...users, data]));
          setMessage('usuario registrado de manera satisfactioria')
          navigate('/login');
        } catch (error) {
          setMessage('hubo un error por favor intente de nuevo')
        }
      }
    }
  }

  return (
    <>
      {message !== '' && <h1>{message}</h1>}
      <RegisterForm onSubmit={onSubmit} />
    </>
  )

}