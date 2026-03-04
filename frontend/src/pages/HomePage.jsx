import { useState } from 'react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'
import LetterCards from '../components/LetterCards'
import ContactModal from '../components/ContactModal'
import './HomePage.css'

const features = [
    {
        text: 'Precisa de um <strong>sistema</strong><br/>para seu <strong>negócio</strong>?',
        reverse: false,
    },
    {
        text: 'Pare de perder <strong>tempo</strong><br/>com <strong>processos</strong> manuais e <strong>automatize</strong> sua rotina.',
        reverse: true,
    },
    {
        text: 'Transforme a gestão do seu negócio com <strong>apenas um clique</strong>.',
        reverse: false,
    },
]

export default function HomePage() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Hero />

            <section className="home-features">
                {features.map((f, i) => (
                    <FeatureCard
                        key={i}
                        text={f.text}
                        reverse={f.reverse}
                        delay={0.15 * (i + 1)}
                    />
                ))}
            </section>

            <CTA onCtaClick={() => setModalOpen(true)} />

            <LetterCards />

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}
