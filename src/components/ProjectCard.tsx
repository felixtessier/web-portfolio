'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type Props = {
  title: string;
  href: string;
  coverSrc?: string;
  description: string;
};

export default function ProjectCard({
  title,
  href,
  coverSrc,
  description,
}: Props) {
  const { theme } = useTheme();
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-stretch rounded-lg overflow-hidden shadow transition 
      hover:shadow-lg hover:scale-[1.03] hover:ring-2 hover:ring-[var(--h-color)] hover:border-[var(--h-color)] border border-transparent duration-200"
    >
      <div className="relative w-48 min-w-48 h-48 bg-gray-200 flex-shrink-0">
        {coverSrc ? (
          <Image src={coverSrc} alt="" fill style={{ objectFit: 'cover' }} />
        ) : null}
      </div>
      <div className="flex flex-col pb-2 px-4 flex-1">
        <div className="flex flex-row justify-between items-center">
          <h4>{title}</h4>
          <Image
            src={`${theme === 'light' ? '/arrow_right_up_dark.svg' : '/arrow_right_up.svg'}`}
            alt="Arrow Icon"
            width={24}
            height={24}
            className="ml-2"
          />
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
}
