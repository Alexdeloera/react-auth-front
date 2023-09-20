import { useEffect, useState } from "react";
import { LoginForm, iLogin } from "../components/LoginForm/LoginForm";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { deleteUser, setUser } from "../store/login/actions";


export const Login = () => {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(deleteUser());
  }, [])

  const logSubmit = (values: iLogin) => {
    
    const data = { ...values };
    console.log('data',data);
    console.log('user',users);
    if (data.password == '' || data.user == '') {
      alert('por favor llene todos los campos correctamente')
    } else {
      const validateUser = users.find((user) => user.name === data.user);
      if (validateUser?.name !== '') {
        if (validateUser?.password === data.password) {
          navigate('/dashboard')
          dispatch(setUser({ 
            id: validateUser.id, 
            user: validateUser.name, 
            email: validateUser.email }))
        } else {
          setMessage('el password es incorrecto')
        }
      } else {
        setMessage('el usuario no esta ragistrado')
      }
    }
  }

  return (
    <>
      <h1>{message}</h1>
      <LoginForm logSubmit={logSubmit} />
    </>
  )
}