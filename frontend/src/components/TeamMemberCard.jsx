import './TeamMemberCard.css'

export default function TeamMemberCard({ name, photo, reverse = false, delay = 0 }) {
    return (
        <div
            className={`team-card animate-fade-in-up${reverse ? ' team-card--reverse' : ''}`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="team-card__info">
                <div className="team-card__name-area">
                    <h3 className="team-card__name">{name}</h3>
                    <span className="team-card__role">Desenvolvedor</span>
                </div>
            </div>
            <div className="team-card__photo-wrapper">
                <img src={photo} alt={name} className="team-card__photo" />
            </div>
        </div>
    )
}
