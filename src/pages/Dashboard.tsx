import { useAppDispatch, useAppSelector } from "../store/hooks"
export const Dashboard = () => {
  const log=useAppSelector((state)=>state.login);
  console.log('log',log);
  
  return(
    <h1>bienvenido {log.user}</h1>
  )
}