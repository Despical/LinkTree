import {ArrowUpRight, CodeXml} from 'lucide-react'
import type {CSSProperties} from 'react'
import type {LinkItem} from '../config/links'

export function LinkCard({item, index}: { item: LinkItem; index: number }) {
    const BrandIcon = item.brandIcon

    return (
        <a
            className={`link-card ${item.featured ? 'link-card--featured' : ''}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            style={{'--enter-delay': `${index * 45}ms`} as CSSProperties}
            aria-label={`${item.title}: ${item.subtitle}`}
        >
      <span className={`link-card__icon ${item.iconClass ?? ''}`}>
        {BrandIcon ? (
            <BrandIcon aria-hidden="true"/>
        ) : item.iconUrl ? (
            <img
                src={item.iconUrl}
                alt=""
                loading="lazy"
                onError={(event) => {
                    event.currentTarget.style.display = 'none'
                    event.currentTarget.nextElementSibling?.removeAttribute('hidden')
                }}
            />
        ) : (
            <CodeXml size={25} strokeWidth={1.8} aria-hidden="true"/>
        )}
      </span>

            <span className="link-card__copy">
        <span className="link-card__title">
          {item.title}
        </span>
                {item.subtitle && <span className="link-card__subtitle">{item.subtitle}</span>}
      </span>

            <ArrowUpRight className="link-card__arrow" size={20} strokeWidth={1.8} aria-hidden="true"/>
        </a>
    )
}
