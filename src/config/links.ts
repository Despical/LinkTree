import {
    SiBuiltbybit,
    SiBuymeacoffee,
    SiDiscord,
    SiGithub,
    SiGithubsponsors,
    SiPatreon,
    SiSpigotmc,
} from 'react-icons/si'
import type {IconType} from 'react-icons'

export type LinkItem = {
    title: string
    subtitle?: string
    href: string
    brandIcon?: IconType
    iconUrl?: string
    iconClass?: string
    featured?: boolean
}

export type LinkSection = {
    id: string
    title: string
    items: LinkItem[]
}

export type QuickLink = {
    label: string
    href: string
    icon: IconType
    iconClass: string
}

export const profile = {
    name: 'Berke Akçen',
    role: 'Computer Engineer | Backend Developer',
    githubUsername: 'Despical',
}

export const quickLinks: QuickLink[] = [
    {
        label: 'Discord',
        href: 'https://discord.gg/uXVU8jmtpU',
        icon: SiDiscord,
        iconClass: 'brand-discord',
    },
    {
        label: 'GitHub Sponsors',
        href: 'https://github.com/sponsors/Despical',
        icon: SiGithubsponsors,
        iconClass: 'brand-sponsors',
    },
    {
        label: 'Buy Me a Coffee',
        href: 'https://buymeacoffee.com/despical',
        icon: SiBuymeacoffee,
        iconClass: 'brand-coffee',
    },
    {
        label: 'Patreon',
        href: 'https://patreon.com/despical',
        icon: SiPatreon,
        iconClass: 'brand-patreon',
    },
]

export const sections: LinkSection[] = [
    {
        id: 'profiles',
        title: 'My Profiles',
        items: [
            {
                title: 'GitHub',
                subtitle:
                    'This is where I keep the source for my plugins, websites, frameworks, libraries, and other projects across more than 150 repositories.',
                href: 'https://github.com/Despical',
                brandIcon: SiGithub,
                iconClass: 'brand-github',
            },
            {
                title: 'SpigotMC',
                subtitle:
                    'I have 18 resources on SpigotMC with more than 125,000 total downloads and over 500 customers. Many of my plugins are trusted by large Minecraft networks.',
                href: 'https://www.spigotmc.org/resources/authors/615094',
                brandIcon: SiSpigotmc,
                iconClass: 'brand-spigot',
            },
            {
                title: 'BuiltByBit',
                subtitle:
                    'I also publish my Minecraft plugins here, with a stronger focus on premium resources and production-ready releases.',
                href: 'https://builtbybit.com/creators/257098',
                brandIcon: SiBuiltbybit,
                iconClass: 'brand-builtbybit',
            },
            {
                title: 'NexusMods',
                subtitle:
                    'I publish mods for games I currently play or have played before, including quality-of-life improvements, bug fixes, and other practical enhancements.',
                href: 'https://www.nexusmods.com/profile/Despical',
                iconUrl: 'nexus-mods.svg',
                iconClass: 'brand-nexus',
            },
        ],
    },
    {
        id: 'projects',
        title: 'My Websites',
        items: [
            {
                title: 'TikFetch',
                subtitle:
                    'TikFetch builds fast, clean tools for saving public TikTok videos, photos, galleries, and MP3 audio without watermark clutter, ads, or unnecessary steps.',
                href: 'https://tikfetch.despical.dev/',
                iconUrl: 'tikfetch-favicon.svg',
                featured: true,
            },
            {
                title: 'Documentation',
                subtitle:
                    'The official documentation for my plugins, tools, and frameworks, with clear guides, APIs, and references for fast and reliable integration.',
                href: 'https://docs.despical.dev',
                iconUrl: 'https://docs.despical.dev/favicon.svg',
            },
            {
                title: "Despical's Libraries",
                subtitle:
                    'Maven and Gradle dependency references for my frameworks and libraries, with ready-to-use repository and implementation snippets.',
                href: 'https://libs.despical.dev',
                iconUrl: 'https://libs.despical.dev/favicon.svg',
            },
            {
                title: 'JavaDoc',
                subtitle:
                    'Generated API documentation for developers who want to integrate with or extend my projects.',
                href: 'https://javadoc.despical.dev',
                iconUrl: 'https://javadoc.despical.dev/favicon.svg',
            },
        ],
    },
]
