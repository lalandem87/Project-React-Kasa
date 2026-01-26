import { NavLink } from "react-router-dom"
import './header.scss'

export default function Header(){
    return (
        <header className="header">
            <img src="./img/LOGO.png" alt="=Logo Kasa" />
            <nav className="header__nav">
                <NavLink to='/' className='header__link'>Accueil</NavLink>
                <NavLink to='/about' className='header__link'>A propos</NavLink>
            </nav>
        </header>
    )
}