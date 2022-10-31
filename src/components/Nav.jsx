import '../styles/nav__style.css'
import imgLogo from '../images/logo.png';
import imgCart from '../images/cart.png';
import imgMenu from '../images/menu.png';



function Nav(){
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href="paginaecommerce.html"> <img className='icon-logo' src={imgLogo} alt='icon-logo' /> </a>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><a href="paginaecommerce.html">Inicio</a></li>
                        <li><a href="paginaecommerce.html">Productos</a></li>
                        <li><a href="paginaecommerce.html">Acerca de</a></li>
                        <li><a href="paginaecommerce.html">Contacto</a></li>
                        <li><a href="paginaecommerce.html">Cuenta</a></li>
                    </ul>
                </nav>
                <img className='icon-cart' src={imgCart} alt="icon-cart"/>
                <img className="menu-icon" src={imgMenu} alt="icon-menu"/>
            </div>
        </div>
    );
}

export default Nav;
