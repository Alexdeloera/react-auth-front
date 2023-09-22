import { Link } from "react-router-dom"
import './navbar.css'
import { useAppSelector } from "../../store/hooks"

export const Navbar = () => {
  const user = useAppSelector((state) => state.login);
  return (
    <nav className="navbar-nav">
      <h2>
        <Link to='/home'>Enterprice</Link>
      </h2> 
      <ul className="navbar-ul">
        {!user.token && <li className="navbar-li">
          <Link to='/register'>Registrarse</Link>
        </li>}
        {!user.token && <li className="navbar-li">
          <Link to='/login'>Login</Link>
        </li>}
        {user.token && <li className="navbar-li">
          <Link to='/login'>Log Out</Link>
        </li>}
        <li>
          <Link to='/about' className="navbar-li">About</Link>
        </li >
      </ul >
    </nav >
  )
}