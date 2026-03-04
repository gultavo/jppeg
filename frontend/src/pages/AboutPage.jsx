import TeamMemberCard from '../components/TeamMemberCard'
import ritter from '../assets/ritter.jpeg'
import pedro from '../assets/pedro.jpeg'
import emanuel from '../assets/emanuel.jpeg'
import jappe from '../assets/jappe.jpeg'
import renosto from '../assets/renosto.jpeg'
import './AboutPage.css'

const members = [
    { name: 'Gustavo Borsatto Ritter', photo: ritter },
    { name: 'Pedro Augusto Andreoni Schneider', photo: pedro },
    { name: 'Emanuel Bauermann da Silva Martins', photo: emanuel },
    { name: 'Gabriel Moura Jappe', photo: jappe },
    { name: 'Pedro Henrique Renosto', photo: renosto },
]

export default function AboutPage() {
    return (
        <div className="about">
            <section className="about__hero">
                <h1 className="about__title animate-fade-in-up">Nossa Equipe</h1>
                <p className="about__subtitle animate-fade-in-up delay-1">
                    Conheça os profissionais por trás da JPPEG
                </p>
            </section>

            <section className="about__members">
                {members.map((m, i) => (
                    <TeamMemberCard
                        key={i}
                        name={m.name}
                        photo={m.photo}
                        reverse={i % 2 !== 0}
                        delay={0.15 * (i + 1)}
                    />
                ))}
            </section>
        </div>
    )
}
