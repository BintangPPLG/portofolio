import { Icon } from '../ui/Icon'
import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel/30" role="contentinfo">
      <div className="shell py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <span className="font-sans text-sm font-medium text-ink block">
              {profile.name}
            </span>
            <span className="text-xs text-ink-muted font-normal">
              Software Engineering &middot; SMK Taruna Bhakti Depok
            </span>
          </div>

          <p className="text-xs text-ink-faint font-mono font-normal">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>

          <div className="flex items-center gap-4" role="list" aria-label="Social links">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="text-ink-muted hover:text-ink transition-colors p-1"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
              >
                <Icon name={social.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}