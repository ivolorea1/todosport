import playstore from '../images/play-store.png'
import appstore from '../images/app-store.png'
import logowhite from '../images/logo-white.png'
import '../styles/footer__style.css'

function Footer (){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Descargá Nuestra App</h3>
                        <p>Disponible para IOS y Android</p>
                        <div className="app-logo">
                            <img src={playstore} alt="playstore"/>
                            <img src={appstore} alt="appstore"/>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={logowhite} alt="logowhite"/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Links</h3>
                        <ul>
                            <li>Cupones</li>
                            <li>Sé revendedor</li>
                            <li>Politica de devolución</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Seguinos</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className="copyright">Copyright 2022 - StartLoop</p>
            </div>
         </div>
    );
}

export default Footer;