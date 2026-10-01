import type { ReactNode } from 'react'

export interface TechItem {
  name: string
  color: string
  /** Clean, authentic SVG vector */
  svg: ReactNode
  category: 'frontend' | 'backend' | 'devops' | 'mobile' | 'language'
  description?: string
}

export const techStack: TechItem[] = [
  {
    name: 'React',
    color: '#61DAFB',
    category: 'frontend',
    description: 'Component-driven UI library',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="currentColor" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#000000',
    category: 'frontend',
    description: 'Full-stack React framework',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 17.525l-6.192-8.083v8.083H9.863V6.475h1.611l6.192 8.083V6.475h1.611v11.05h-1.611z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    category: 'language',
    description: 'Typed JavaScript superset',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 1.5h21v21h-21z" fill="#3178C6" />
        <path d="M11.5 9.2h-3v8.3H6.8V9.2H3.8V7.5h7.7v1.7zm3.3 5.4c.5.4 1.2.7 2 .7.8 0 1.2-.3 1.2-.8 0-.4-.3-.6-1.1-.9l-1-.4c-1.4-.5-2.2-1.3-2.2-2.5 0-1.6 1.3-2.7 3.2-2.7 1.2 0 2.2.3 2.9.9l-.6 1.5c-.6-.4-1.3-.7-2.1-.7-.8 0-1.3.3-1.3.8 0 .4.3.6 1 .9l1 .4c1.6.6 2.3 1.4 2.3 2.6 0 1.7-1.3 2.8-3.4 2.8-1.5 0-2.6-.4-3.4-1.1l.5-1.6z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    category: 'language',
    description: 'Core web scripting language',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 1.5h21v21h-21z" fill="#F7DF1E" />
        <path d="M8.2 16.4c0 1.2-.8 1.8-2 1.8-.9 0-1.6-.4-2.1-1l.7-1.2c.4.4.8.7 1.3.7.4 0 .7-.2.7-.6v-5.2h1.4v5.5zm4.8-1c.5.4 1.2.7 2 .7.8 0 1.2-.3 1.2-.8 0-.4-.3-.6-1.1-.9l-1-.4c-1.4-.5-2.2-1.3-2.2-2.5 0-1.6 1.3-2.7 3.2-2.7 1.2 0 2.2.3 2.9.9l-.6 1.5c-.6-.4-1.3-.7-2.1-.7-.8 0-1.3.3-1.3.8 0 .4.3.6 1 .9l1 .4c1.6.6 2.3 1.4 2.3 2.6 0 1.7-1.3 2.8-3.4 2.8-1.5 0-2.6-.4-3.4-1.1l.5-1.6z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    color: '#646CFF',
    category: 'frontend',
    description: 'Next generation frontend tooling',
    svg: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M21.5 4.5L12.5 21 2.5 4.5h5.5l4.5 9 4.5-9h4.5z" fill="url(#vite-grad)" />
        <path d="M13 3l-6 10h4.5l-1 7.5L18 9h-4.5L15 3h-2z" fill="#FFC920" />
        <defs>
          <linearGradient id="vite-grad" x1="2.5" y1="4.5" x2="21.5" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    category: 'frontend',
    description: 'Utility-first CSS framework',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    category: 'backend',
    description: 'JavaScript runtime environment',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.5L3.5 7.4v9.8L12 22.1l8.5-4.9V7.4L12 2.5zm0 2.3l6.5 3.8v7.5L12 19.8l-6.5-3.8V8.6L12 4.8z" />
        <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'Express',
    color: '#000000',
    category: 'backend',
    description: 'Fast, minimalist Node web framework',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.5 12h19M2.5 7h19M2.5 17h19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="7" r="2.5" fill="currentColor" />
        <circle cx="17" cy="12" r="2.5" fill="currentColor" />
        <circle cx="9" cy="17" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    color: '#00758F',
    category: 'backend',
    description: 'Relational database management',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    name: 'JWT',
    color: '#D63AFF',
    category: 'backend',
    description: 'JSON Web Token authentication',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-1 6h2v2h-2V8zm0 4h2v6h-2v-6z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    color: '#2496ED',
    category: 'devops',
    description: 'Containerization platform',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.186.186.186zm5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zM23.797 12.03c-.27-.196-.867-.34-1.74-.34-.234 0-.479.014-.728.04-.378-.95-1.15-1.574-2.197-1.574-.61 0-1.2.22-1.7.63-.092-.008-.184-.012-.277-.012H1.27c-.244 0-.46.106-.61.277-.15.17-.225.405-.205.65.36 4.412 3.82 7.82 8.04 7.82 5.074 0 9.38-4.04 9.947-9.15.545.16 1.135.247 1.765.247.53 0 .97-.07 1.3-.21.432-.18.775-.515.932-.942.063-.173.06-.34-.04-.486z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    category: 'devops',
    description: 'Distributed version control',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.62 10.74l-8.36-8.36a1.73 1.73 0 00-2.45 0L8.35 4.84l3.1 3.1a2.05 2.05 0 012.6 2.6l3 3a2.05 2.05 0 11-1.23 1.23l-2.8-2.8v4.06a2.05 2.05 0 11-1.74 0V11.8a2.05 2.05 0 01-1.12-2.7L8.13 6.07 2.38 11.82a1.73 1.73 0 000 2.45l8.36 8.36a1.73 1.73 0 002.45 0l8.43-8.43a1.73 1.73 0 000-2.46z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    color: '#181717',
    category: 'devops',
    description: 'Code hosting & collaboration',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.3 24 17.8 24 12.5 24 5.9 18.6.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    color: '#000000',
    category: 'devops',
    description: 'Frontend cloud platform',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2z" />
      </svg>
    ),
  },
  {
    name: 'React Native',
    color: '#61DAFB',
    category: 'mobile',
    description: 'Cross-platform mobile applications',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
        <ellipse cx="12" cy="9" rx="4.5" ry="2" stroke="currentColor" />
        <ellipse cx="12" cy="9" rx="4.5" ry="2" transform="rotate(60 12 9)" stroke="currentColor" />
        <ellipse cx="12" cy="9" rx="4.5" ry="2" transform="rotate(120 12 9)" stroke="currentColor" />
        <circle cx="12" cy="9" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Expo',
    color: '#000020',
    category: 'mobile',
    description: 'Universal React applications',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm0 4.6l7.4 12.8H4.6L12 6.6z" />
      </svg>
    ),
  },
  {
    name: 'HTML5',
    color: '#E34F26',
    category: 'language',
    description: 'Semantic markup standard',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.7h-9l.2 2.5h8.6l-.7 7.7-4.9 1.4-4.9-1.4-.3-3.6h2.4l.2 1.8 2.6.7 2.6-.7.3-3.1H6.1L5.5 5.2h12.5l-.2 2.5z" />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    category: 'language',
    description: 'Modern styling & responsive layouts',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.7H6.3l.2 2.5h10l-.4 4.5-4.1 1.1-4.1-1.1-.3-3H5.2l.4 5.3 6.4 1.8 6.4-1.8.8-9.3z" />
      </svg>
    ),
  },
]

export interface TechCategoryGroup {
  label: string
  items: string[]
}

export const techCategories: TechCategoryGroup[] = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'MySQL', 'JWT'] },
  { label: 'Mobile', items: ['React Native', 'Expo'] },
  { label: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub', 'Vercel'] },
]
