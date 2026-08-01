import {ArrowUpRight} from 'lucide-react'
import {SiGithub} from 'react-icons/si'

export function ContributionSnake({username}: { username: string }) {
    const generatedSnake = `${import.meta.env.BASE_URL}github-contribution-grid-snake.svg`

    return (
        <section className="github-section" aria-labelledby="github-activity-title">
            <h2 id="github-activity-title">GitHub Activity</h2>
            <a
                className="github-card"
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${username} on GitHub`}
            >
                <div className="github-card__heading">
          <span className="github-card__identity">
            <span className="github-card__logo">
              <SiGithub aria-hidden="true"/>
            </span>
            <span>
              <strong>@{username}</strong>
              <small>Contribution activity</small>
            </span>
          </span>
                    <ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true"/>
                </div>

                <div className="snake-frame">
                    <img
                        src={generatedSnake}
                        alt={`Animated snake moving through ${username}'s GitHub contribution grid`}
                    />
                </div>
            </a>
        </section>
    )
}
