import './FeatureCard.css'

export default function FeatureCard({ text, image, reverse = false, delay = 0 }) {
    return (
        <div
            className={`feature-card animate-fade-in-up${reverse ? ' feature-card--reverse' : ''}`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="feature-card__text">
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <div className="feature-card__visual">
                {image ? (
                    <img src={image} alt="" className="feature-card__img" />
                ) : (
                    <div className="feature-card__pattern">
                        <div className="feature-card__dot" />
                        <div className="feature-card__dot" />
                        <div className="feature-card__dot" />
                        <div className="feature-card__dot" />
                    </div>
                )}
            </div>
        </div>
    )
}
