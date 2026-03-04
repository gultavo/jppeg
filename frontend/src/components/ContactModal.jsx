import { useState, useEffect, useRef } from 'react'
import logo from '../assets/logojppeg 1.png'
import './ContactModal.css'

export default function ContactModal({ isOpen, onClose }) {
    const [form, setForm] = useState({ email: '', empresa: '', comentario: '' })
    const overlayRef = useRef(null)

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) onClose()
        }
        document.addEventListener('keydown', handleEsc)
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) onClose()
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Placeholder for form submission
        alert('Mensagem enviada com sucesso!')
        setForm({ email: '', empresa: '', comentario: '' })
        onClose()
    }

    if (!isOpen) return null

    return (
        <div
            className="modal-overlay"
            ref={overlayRef}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-label="Formulário de contato"
        >
            <div className="modal animate-fade-in-up">
                <button className="modal__close" onClick={onClose} aria-label="Fechar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="modal__inner">
                    <div className="modal__left">
                        <h3 className="modal__title">Quer transformar seu negócio?</h3>
                        <img src={logo} alt="JPPEG logo" className="modal__logo" />
                        <p className="modal__desc">
                            Cadastre-se e entre em contato com nossa equipe de profissionais!
                        </p>
                        <button className="modal__back-btn" onClick={onClose}>
                            Voltar
                        </button>
                    </div>

                    <div className="modal__divider" />

                    <form className="modal__right" onSubmit={handleSubmit}>
                        <div className="modal__field">
                            <label htmlFor="modal-email">Email</label>
                            <input
                                id="modal-email"
                                name="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="modal__field">
                            <label htmlFor="modal-empresa">Empresa</label>
                            <input
                                id="modal-empresa"
                                name="empresa"
                                type="text"
                                placeholder="Nome da empresa"
                                value={form.empresa}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="modal__field">
                            <label htmlFor="modal-comentario">Comentário</label>
                            <textarea
                                id="modal-comentario"
                                name="comentario"
                                placeholder="Conte-nos sobre seu projeto..."
                                value={form.comentario}
                                onChange={handleChange}
                                rows="4"
                            />
                        </div>

                        <button type="submit" className="modal__submit-btn">
                            <span>Enviar</span>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
