import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logojppeg 1.png'
import './Footer.css'

export default function Footer() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <Link to="/" className="footer__logo" aria-label="JPPEG Home">
                    <img src={logo} alt="JPPEG logo" />
                </Link>

                <div className="footer__center">
                    <p className="footer__tagline">A peça que faltava na sua gestão</p>
                </div>

                <nav className="footer__nav">
                    {isHome ? (
                        <>
                            <Link to="/sobre" className="footer__link">Sobre nós</Link>
                            <a href="#contratar" className="footer__link">Contratar</a>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="footer__link">Home</Link>
                            <a href="#contratar" className="footer__link">Contratar</a>
                        </>
                    )}
                </nav>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <p className="footer__copy">
                        © {new Date().getFullYear()} JPPEG. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
