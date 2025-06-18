// components/PostCard.tsx
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  href: string;
  coverSrc?: string;
  authorName: string;
  authorAvatar: string;
  readTime: string;
};

export default function PostCard({
  title,
  href,
  coverSrc,
  authorName,
  authorAvatar,
  readTime,
}: Props) {
  return (
    <Link
      href={href}
      className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
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
            className="rounded-full object-cover mr-4"
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
