export interface CardDataType {
  title: string;
  slug: string;
  coverSrc: string;
  authorName: string;
  authorAvatar: string;
  readTime: string;
}

export const CardData: CardDataType[] = [
  {
    title: 'From highschool to software developer',
    slug: 'from-highschool-to-software-developer',
    coverSrc: '/software-dev.jpeg',
    authorName: 'Felix',
    authorAvatar: '/felix-profile.jpg',
    readTime: '6 min read',
  },
  {
    title: 'Understanding React Hooks',
    slug: 'understanding-react-hooks',
    coverSrc: '/software-dev.jpeg',
    authorName: 'Felix',
    authorAvatar: '/felix-profile.jpg',
    readTime: '8 min read',
  },
  {
    title: 'CSS Grid vs Flexbox',
    slug: 'css-grid-vs-flexbox',
    coverSrc: '/software-dev.jpeg',
    authorName: 'Felix',
    authorAvatar: '/felix-profile.jpg',
    readTime: '5 min read',
  },
  {
    title: 'The Future of JavaScript',
    slug: 'future-of-javascript',
    coverSrc: '/software-dev.jpeg',
    authorName: 'Felix',
    authorAvatar: '/felix-profile.jpg',
    readTime: '7 min read',
  },
];
