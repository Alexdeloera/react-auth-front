import { useAppSelector } from "../store/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute:React.FC=()=>{
const signed=useAppSelector((state)=>state.login);
return(
  <>
  {signed.id!==''? <Outlet/>:<Navigate to='login'/>}
  </>
)
}
