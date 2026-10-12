export const site = {
  name: 'estebanjrc.dev',
  brand: {
    initial: 'e',
    name: 'stebanjrc',
    domain: '.dev',
  },
  watermark: '— Designed and built by Esteban JRC.',
  role: 'Software Developer',
  description: 'My personal portfolio website, which showcases my development projects, technical skills, and experience in software engineering.',
  locale: 'en',
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Selected work', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Let’s talk', href: '#contact' },
] as const;

export const hero = {
  eyebrow: 'Software developer · Colombia',
  title: 'I build digital products',
  titleAccent: 'with intent.',
  description:
    'I’m Esteban, a software developer focused on creating clear, useful and thoughtful experiences for the web.',
  availability: 'Available for selected opportunities',
  location: 'UTC−5 · COL',
  portraitAlt: 'Portrait of Juan Esteban Romo Caicedo',
  portraitCaption: 'ESTEBAN JRC',
  portraitCopyright: '© 2024—26',
  primaryLink: {
    label: 'Explore my work',
    href: '#projects',
  },
  secondaryLink: {
    label: 'More about me',
    href: '#about',
  },
} as const;

export const socialLinks = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/estebanbugsjrc1107' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/estebanjrc1107/' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/esteban_jrc1107/' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/estebanjrc1107' },
  { label: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@esteban_jrc1107' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@estebanjrc1107' },
] as const;

export const contact = {
  email: 'estebanjrc1107@gmail.com',
  subject: 'Let’s start a conversation',
} as const;
