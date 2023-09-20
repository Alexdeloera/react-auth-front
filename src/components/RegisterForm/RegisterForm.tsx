import React from 'react'
import { useForm } from 'react-hook-form';
import { IUserRegister } from '../../store/users/initialState';
import './registerform.css'

interface iFormRegisterProps {
  onSubmit: (values: IUserRegister) => void
}
export const RegisterForm: React.FC<iFormRegisterProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<IUserRegister>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  return (
    <>
    <div className='flex justify-center'>
      <div className='formRegister-Conteiner_main'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className='formRegister-title'>
              Registro
            </h1>
          </div>
          <div>
            <input type='text' placeholder='name'{...register("name")} className='formRegiser-input'></input>
          </div>
          <div>
            <input type='text' placeholder='email'{...register("email")} className='formRegiser-input'></input>
          </div>
          <div>
            <input type='password' placeholder='password'{...register("password")} className='formRegiser-input'></input>
          </div>
          <button type='submit' className='formRegister-button'>Guardar</button>
        </form>
      </div>
    </div>
    </>
  )
}