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
    coverSrc: '/images/software-dev.jpeg',
    authorName: 'Felix',
    authorAvatar: '/images/felix-profile.jpg',
    readTime: '6 min read',
  },
];
