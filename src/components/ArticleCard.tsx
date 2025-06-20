'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type Props = {
  title: string;
  slug: string;
  coverSrc?: string;
  authorName: string;
  authorAvatar: string;
  readTime: string;
};

export default function ArticleCard({
  title,
  slug,
  coverSrc,
  authorName,
  authorAvatar,
  readTime,
}: Props) {
  const { theme } = useTheme();
  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      className="block rounded-lg overflow-hidden shadow transition 
      hover:shadow-lg hover:scale-[1.03] hover:ring-2 hover:ring-[var(--h-color)] hover:border-[var(--h-color)] border border-transparent duration-200"
    >
      {coverSrc ? (
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image src={coverSrc} alt="" fill style={{ objectFit: 'cover' }} />
        </div>
      ) : (
        <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden" />
      )}
      <div className="p-4">
        <h3 className="mb-3">{title}</h3>
        <div className="flex items-center">
          <Image
            src={authorAvatar}
            alt={authorName}
            width={60}
            height={60}
            className={`rounded-full object-cover mr-4 border ${theme === 'light' ? 'border-black' : 'border-white'}`}
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold">{authorName}</span>
            <span className="text-base">{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
