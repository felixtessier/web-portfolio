export interface ProjectCardDataType {
  title: string;
  href: string;
  coverSrc: string;
  description: string;
}

export const ProjectCardData: ProjectCardDataType[] = [
  {
    title: 'Personal Web Portfolio',
    href: 'https://github.com/felixtessier/web-portfolio',
    coverSrc: '/images/web-portfolio-project.png',
    description:
      'The personal web portfolio you are currently viewing, built with Next.js, TypeScript, and Tailwind CSS.',
  },
];
