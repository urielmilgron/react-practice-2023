import owl from "../../assets/owl.svg"
import './navbar.css'
import Button from '../Button/Button'
export const Navbar = () => {
    return(
        <header>
            <div className="logo__nav__container">
                <img className="logo__nav"src={owl}></img>
            </div>
            <nav>
            <Button where='navbar__anchor' to='/Home' text="Home" />
            <Button where='navbar__anchor' to='/Proyects' text="Proyects"  />
            <Button where='navbar__anchor' to='/Aboutme' text="About me"  />
            
            </nav>
        </header>
    )
}