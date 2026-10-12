export type ProjectType = 'product' | 'experiment';
export type ProjectPalette = 'peach' | 'sage' | 'blue' | 'ink';

export interface Project {
  number: string;
  title: string;
  type: ProjectType;
  label: string;
  description: string;
  technologies: readonly string[];
  palette: ProjectPalette;
  href: string | null;
}

export const projects: readonly Project[] = [
  {
    number: '01',
    title: 'Learning Platform Integration',
    type: 'product',
    label: 'Education · Web application',
    description:
      'Integrated the Brightspace learning platform with Pearson learning content for selected language courses.',
    technologies: ['Angular', 'Java', 'Spring Boot'],
    palette: 'peach',
    href: null,
  },
  {
    number: '02',
    title: 'Employee Review Workflow',
    type: 'product',
    label: 'Business process · Automation',
    description:
      'Built a Power Platform application to automate the probation-period evaluation process for employees.',
    technologies: ['Power Platform', 'Power Apps', 'Power Automate'],
    palette: 'sage',
    href: null,
  },
  {
    number: '03',
    title: 'Oracle APEX Business Solutions',
    type: 'product',
    label: 'Enterprise applications',
    description:
      'Developed business solutions in Oracle APEX and supported the migration of legacy Oracle Forms applications.',
    technologies: ['Oracle APEX', 'Oracle Forms', 'Oracle Database'],
    palette: 'blue',
    href: null,
  },
  {
    number: '04',
    title: 'Java Application Containerization',
    type: 'product',
    label: 'Infrastructure · Modernization',
    description:
      'Contributed to moving Java applications into Docker containers and Linux servers, working with Oracle databases and Git.',
    technologies: ['Java', 'Docker', 'Linux', 'Oracle'],
    palette: 'ink',
    href: null,
  },
  {
    number: '05',
    title: 'Personal Portfolio',
    type: 'experiment',
    label: 'In progress · Astro',
    description:
      'An ongoing experiment in building a clear, responsive portfolio with reusable Astro components and accessible interactions.',
    technologies: ['Astro', 'TypeScript', 'CSS'],
    palette: 'peach',
    href: null,
  },
];
