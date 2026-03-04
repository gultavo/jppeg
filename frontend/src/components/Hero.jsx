import logo from '../assets/logojppeg 1.png'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__bg-shape hero__bg-shape--1" />
            <div className="hero__bg-shape hero__bg-shape--2" />
            <div className="hero__bg-shape hero__bg-shape--3" />
            <div className="hero__content animate-fade-in-up">
                <img src={logo} alt="JPPEG logo" className="hero__logo" />
                <p className="hero__tagline">
                    A peça que faltava na sua <strong>gestão</strong>
                </p>
                <div className="hero__badge">Software sob medida para o seu negócio</div>
            </div>
        </section>
    )
}
