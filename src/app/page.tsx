import ArticleCard from '@/components/ArticleCard';
import { CardData } from '@/data/ArticlesCardData';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col px-4">
      <h1>Featured Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 border-b-2 border-white">
        {CardData.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            href={article.href}
            coverSrc={article.coverSrc}
            authorName={article.authorName}
            authorAvatar={article.authorAvatar}
            readTime={article.readTime}
          />
        ))}
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 place-items-center my-12 mx-12 lg:mx-36">
        <Image
          src="/felix-profile.jpg"
          alt="Logo"
          width={300}
          height={300}
          className="rounded-full transition-opacity duration-300 mr-8"
        />
        <div className="ml-8">
          <h3>Felix Tessier</h3>
          <p className="font-bold text-2xl my-2">
            Full Stack Software Developer
          </p>
          <p className="text-xl my-2">
            I'm currently working as a Software Developer at Price Industries
            Ltd.
          </p>
          <div className="my-2">
            <Link
              href="https://www.linkedin.com/in/felix-tessier-48486824b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin_line.svg"
                alt="LinkedIn"
                width={36}
                height={36}
                className="inline-block mr-4 hover:opacity-70 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="https://github.com/felixtessier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github_line.svg"
                alt="Github"
                width={36}
                height={36}
                className="inline-block mr-4 hover:opacity-70 transition-opacity duration-300"
              />
            </Link>
            <Image
              src="/mail_line.svg"
              alt="mail"
              width={36}
              height={36}
              className="inline-block mr-4 hover:opacity-70 transition-opacity duration-300"
            />
          </div>
          <Link
            href="/CV_Felix_Tessier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E06C00] hover:bg-[#D05B00] px-8 py-4 rounded-2xl text-2xl 
              font-semibold text-white text-center my-2 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D05B00]"
            role="button"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
