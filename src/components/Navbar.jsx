import owl from './../assets/owl.svg'
import './navbar.css'
export const Navbar = () => {
    return(
        <header>
            <div className="logo__nav__container">
                <img className="logo__nav"src={owl}></img>
            </div>
            <nav>
                <a href="#">Home</a><a href="#">Proyects</a><a href="#">About me</a>
            </nav>
        </header>
    )
}