import React from 'react'
import { useForm } from 'react-hook-form';
import { IUserRegister } from '../../store/users/initialState';
import './registerform.css'
import RegisterValidations from '../../validations/RegisterValidations';
interface iFormRegisterProps {
  onSubmit: (values: IUserRegister) => void
}
export const RegisterForm: React.FC<iFormRegisterProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUserRegister>({
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
              <input
                type='text'
                placeholder='name'
                {...register("name",RegisterValidations.name)}
                className='formRegiser-input'
              />
              {errors.name && <p className='formRegiser-mesage'>{errors.name?.message}</p>}
            </div>
            <div>
              <input
                type='text'
                placeholder='email'
                {...register("email",RegisterValidations.email)}
                className='formRegiser-input'
              />
              {errors.email && <p className='formRegiser-mesage'>{errors.email?.message}</p>}
            </div>
            <div>
              <input
                type='password'
                placeholder='password'
                {...register("password", RegisterValidations.password)}
                className='formRegiser-input'
              />
              {errors.password && <p className='formRegiser-mesage'>{errors.password?.message}</p>}
            </div>
            <button type='submit' className='formRegister-button'>Guardar</button>
          </form>
        </div>
      </div>
    </>
  )
}