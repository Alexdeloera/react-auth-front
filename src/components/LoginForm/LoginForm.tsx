import { useForm } from "react-hook-form"
import React from 'react'
import './loginForm.css'

export interface iLogin {
  user: string,
  password: string
}
interface iLogProps {
  logSubmit: (values: iLogin) => void
}

export const LoginForm: React.FC<iLogProps> = ({ logSubmit }) => {
  const { register, handleSubmit } = useForm<iLogin>({
    defaultValues: {
      user: '',
      password: ''
    }
  })
  return (
    <>
    <div className="flex justify-center">
      <div className="loginForm-container_main">
        <form onSubmit={handleSubmit(logSubmit)}>
          <div>
            <h1 className="loginForm-title">Login</h1>
          </div>
          <div>
            <input type="text" placeholder="User" {...register("user")} className="loginForm-input" />
          </div>
          <div>
            <input type="password" placeholder="Password" {...register("password")} className="loginForm-input" />
          </div>
          <div>
            <button type="submit" className="loginForm-button">Guardar</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}