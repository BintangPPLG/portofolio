export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'twitter' | 'mail'
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  highlights: string[]
  links: { label: string; url: string }[]
  featured?: boolean
  year: string
}

export interface Experience {
  role: string
  company: string
  period: string
  summary: string
  achievements: string[]
  tech: string[]
}

export interface Profile {
  name: string
  title: string
  tagline: string
  availability: string
  location: string
  email: string
  resumeUrl: string
  socials: SocialLink[]
  stats: { label: string; value: string }[]
  skills: SkillCategory[]
  projects: Project[]
  experience: Experience[]
}

export const profile: Profile = {
  name: 'Narendra Bintang Ramadan',
  title: 'Software Engineer',
  tagline:
    'Software Engineering student at SMK Taruna Bhakti Depok. Focused on building clean, accessible, and resilient web applications using React, Next.js, Node.js, Express, and MySQL.',
  availability: 'Available for opportunities',
  location: 'Depok, Indonesia',
  email: 'alyapranata8@gmail.com',
  resumeUrl: '/CV_PORTOFOLIO_Narendra Bintang.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/BintangPPLG', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/narendra-bintang-2a39a6420/', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:alyapranata8@gmail.com', icon: 'mail' },
  ],
  stats: [
    { label: 'Semesters', value: '4+' },
    { label: 'Projects Shipped', value: '3+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Certifications', value: '2' },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MySQL', 'JWT'],
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Expo'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'Git', 'GitHub', 'Vercel'],
    },
  ],
  projects: [
    {
      name: 'SuaraWarga System',
      description:
        'A multi-platform public aspiration and complaint system (Web & Mobile) integrated with Leaflet OpenStreetMap precision mapping, Role-Based Access Control (RBAC), and interactive modern interfaces.',
      tech: ['Next.js', 'React', 'React Native', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      highlights: [
        'Interactive Leaflet geospatial mapping with GPS synchronization and reverse geocoding',
        'Role-Based Access Control (RBAC) across Citizens, Regional Admins, and Super Admins',
        'Full complaint lifecycle tracking with real-time status transitions and threaded discussions',
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/BintangPPLG/Pengaduan-Masyarakat' },
      ],
      featured: true,
      year: '2025',
    },
    {
      name: 'Digital Library (SMK Taruna Bhakti)',
      description:
        'A modern digital library management system designed for SMK Taruna Bhakti Depok to support literacy and student learning, integrating Kurikulum Merdeka textbooks and vocational practical modules.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL'],
      highlights: [
        'Multi-role portal supporting Students, Teachers, and Library Administrators',
        'Curated catalog categorized across 5 vocational majors (RPL, TKJ, DKV, BC, TEI)',
        'Self-service book reservation, borrowing workflow, and digital catalog search',
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/BintangPPLG/perpustakaan-taruna-bhakti' },
      ],
      featured: true,
      year: '2025',
    },
    {
      name: 'E-Commerce Basic (SecondStyle)',
      description:
        'An e-commerce application for shopping. This project marks the very beginning of my coding journey, originally built with foundational pure HTML, CSS, and vanilla JavaScript during grade 10 as my initial milestone in web development.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Foundational coding milestone exploring pure HTML5 structure and CSS styling',
        'Complete shopping flow: dynamic product catalog, detail views, cart, and simulated checkout',
        'Crafted with native web fundamentals without relying on heavyweight frameworks',
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/BintangPPLG/e-commerce-basic' },
      ],
      featured: false,
      year: '2024',
    },
  ],
  experience: [
    {
      role: 'Software Engineering Student',
      company: 'SMK Taruna Bhakti Depok',
      period: '2023 - Present',
      summary:
        'Studying software engineering fundamentals, software architecture, modern web development, and database design. Actively developing production-ready web and mobile applications.',
      achievements: [
        'Consistently delivered coursework projects following clean architecture practices',
        'Built full-stack solutions integrating React frontends with Node/Express backends',
        'Collaborated on agile software development projects with Git workflows',
      ],
      tech: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL'],
    },
    {
      role: 'Uji Level: Multi-Platform Application Development',
      company: 'SMK Taruna Bhakti',
      period: 'Jun 2026',
      summary: 'Practical competency assessment covering cross-platform web and mobile development.',
      achievements: [
        'Achieved score of 91/100 on comprehensive technical assessment',
        'Validated cross-platform architecture using React, React Native, and MySQL',
      ],
      tech: ['React', 'React Native', 'Next.js', 'MySQL'],
    },
    {
      role: 'Uji Level: Web Application Development',
      company: 'SMK Taruna Bhakti',
      period: 'Jun 2025',
      summary: 'Practical competency assessment in front-end and back-end integration standards.',
      achievements: [
        'Achieved score of 79/100 on competency assessment',
        'Demonstrated practical responsive design and dynamic API data handling',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript'],
    },
  ],
}
