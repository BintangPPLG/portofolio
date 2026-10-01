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
        'A comprehensive community complaint and report tracking system. Features role-based access for citizens, department admins, and super admins to submit, verify, and resolve public complaints with real-time lifecycle tracking.',
      tech: ['Next.js', 'React', 'React Native', 'MySQL', 'Tailwind CSS'],
      highlights: [
        'Role-based access control with granular permission layers',
        'End-to-end complaint lifecycle tracking: submit, review, verify, resolve',
        'Cross-platform accessibility with responsive web interface and mobile app',
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/BintangPPLG/frontend-web-pengaduan' },
      ],
      featured: true,
      year: '2025',
    },
    {
      name: 'Digital Library Management',
      description:
        'A structured web-based library management system. Includes user authentication, complete book catalog browsing, borrowing workflow with status tracking, protected routes, and a clean reading interface.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      highlights: [
        'Secure authentication with session handling and protected routes',
        'Interactive catalog search, book reservation, and borrowing lifecycle',
        'Fast and lightweight interface designed for mobile and desktop screens',
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/BintangPPLG/perpustakaan-taruna-bhakti' },
      ],
      featured: true,
      year: '2025',
    },
    {
      name: 'Second Style E-Commerce',
      description:
        'A responsive e-commerce web platform integrating FakeStoreAPI for dynamic product inventory, interactive catalog filtering, product detail modals, and cart state management.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Dynamic product fetching and client-side category filtering',
        'Responsive product cards with quick-view detail interactions',
        'Clean modular JavaScript architecture without external heavyweight libraries',
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
