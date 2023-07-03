import owl from './../assets/owl.svg'
import './navbar.css'
import Button from './Button'
export const Navbar = () => {
    return(
        <header>
            <div className="logo__nav__container">
                <img className="logo__nav"src={owl}></img>
            </div>
            <nav>
            <Button where='navbar__anchor' to='/main' text="Home" />
            <Button where='navbar__anchor' to='#' text="Proyects"  />
            <Button where='navbar__anchor' to='#' text="About me"  />
            
            </nav>
        </header>
    )
}