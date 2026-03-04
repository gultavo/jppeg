import './LetterCards.css'

const letters = ['J', 'P', 'P', 'E', 'G']

export default function LetterCards() {
    return (
        <section className="letter-cards">
            <div className="letter-cards__grid">
                {letters.map((letter, i) => (
                    <div
                        key={i}
                        className="letter-cards__card animate-fade-in-up"
                        style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                    >
                        <span className="letter-cards__letter">{letter}</span>
                        <div className="letter-cards__shine" />
                    </div>
                ))}
            </div>
        </section>
    )
}
