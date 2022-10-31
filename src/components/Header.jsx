import image1 from '../images/image1.png';
import '../styles/header__style.css'

function Header(){
    return (
        <div className="row">
                <div className="col-2">
                    <h1>¿Estás preparado para<br/>alentar a la selección con TODOSPORTS?</h1>
                    <p>Esta primavera compra con 25% OFF <br/> usando tu tarjeta VISA o MasterCard</p>
                    <a href="#Productos" className="btn" >Explora</a>                    
                </div>

                <div className="col-2">
                    <img className='image-1' src={image1} alt="image1"/>
                </div>
        </div>
    );
}

export default Header;