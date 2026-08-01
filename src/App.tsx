import {useEffect, useState} from 'react'
import {ArrowUp} from 'lucide-react'
import {CodeBackdrop} from './components/CodeBackdrop'
import {ContributionSnake} from './components/ContributionSnake'
import {Section} from './components/Section'
import {profile, quickLinks, sections} from './config/links'

function App() {
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const updateVisibility = () => setShowBackToTop(window.scrollY > 480)
        updateVisibility()
        window.addEventListener('scroll', updateVisibility, {passive: true})
        return () => window.removeEventListener('scroll', updateVisibility)
    }, [])

    return (
        <>
            <CodeBackdrop/>

            <main className="page-shell">
                <section className="profile" aria-labelledby="profile-name">
                    <h1 id="profile-name">{profile.name}</h1>
                    <p>{profile.role}</p>
                    <div className="quick-links" aria-label="Community and support links">
                        {quickLinks.map((link) => {
                            const Icon = link.icon

                            return (
                                <a
                                    className={`quick-link ${link.iconClass}`}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={link.label}
                                    data-label={link.label}
                                    key={link.label}
                                >
                                    <Icon aria-hidden="true"/>
                                </a>
                            )
                        })}
                    </div>
                </section>

                <div className="link-sections">
                    {sections.map((section) => (
                        <Section section={section} key={section.id}/>
                    ))}
                </div>

                <ContributionSnake username={profile.githubUsername}/>

                <div className="footer-separator"/>
                <footer className="email-footer">
                    <span>Need to get in touch?</span>
                    <div className="email-links">
                        <a href="mailto:berkeakcen@gmail.com">berkeakcen@gmail.com</a>
                        <span>or</span>
                        <a href="mailto:contact@despical.dev">contact@despical.dev</a>
                    </div>
                    <small>© 2026 Berke Akçen</small>
                    <p className="site-note">
                        This is not my portfolio website. It is simply my personal Linktree, bringing my
                        projects, profiles, resources, and other links together in one place.
                    </p>
                </footer>
            </main>

            <button
                className={`back-to-top ${showBackToTop ? 'back-to-top--visible' : ''}`}
                type="button"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                aria-label="Back to top"
            >
                <ArrowUp size={20} strokeWidth={2} aria-hidden="true"/>
            </button>
        </>
    )
}

export default App
