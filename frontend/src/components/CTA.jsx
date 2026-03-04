import './CTA.css'

export default function CTA({ onCtaClick }) {
    return (
        <section className="cta" id="contratar">
            <div className="cta__inner animate-fade-in-up">
                <h2 className="cta__title">Quero transformar meu negócio</h2>
                <p className="cta__subtitle">
                    Soluções digitais personalizadas para impulsionar o seu crescimento.
                </p>
                <button className="cta__button" onClick={onCtaClick}>
                    <span>Comece agora</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    )
}
