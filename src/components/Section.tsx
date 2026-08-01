import type {LinkSection} from '../config/links'
import {LinkCard} from './LinkCard'

export function Section({section}: { section: LinkSection }) {
    return (
        <section className="link-section" aria-labelledby={`${section.id}-title`}>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <div className="card-stack">
                {section.items.map((item, index) => (
                    <LinkCard item={item} index={index} key={item.title}/>
                ))}
            </div>
        </section>
    )
}
