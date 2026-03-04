import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logojppeg 1.png'
import './Header.css'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const isHome = location.pathname === '/'

    return (
        <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
            <div className="container header__inner">
                <Link to="/" className="header__logo" aria-label="JPPEG Home">
                    <img src={logo} alt="JPPEG logo" />
                </Link>
                <nav className="header__nav">
                    {isHome ? (
                        <>
                            <Link to="/sobre" className="header__link">Sobre nós</Link>
                            <a href="#contratar" className="header__link header__link--cta">Contratar</a>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="header__link">Home</Link>
                            <a href="#contratar" className="header__link header__link--cta">Contratar</a>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}
