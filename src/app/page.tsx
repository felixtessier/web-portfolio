'use client';

import ArticleCard from '@/components/ArticleCard';
import { CardData } from '@/data/ArticlesCardData';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      <div
        className={`border-b ${theme === 'light' ? 'border-black' : 'border-white'}`}
      >
        <div className="mx-12 xl:mx-24 my-8">
          <h1>Featured Blog Posts</h1>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8`}
          >
            {CardData.slice(0, 6).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <ArticleCard
                  title={article.title}
                  slug={article.slug}
                  coverSrc={article.coverSrc}
                  authorName={article.authorName}
                  authorAvatar={article.authorAvatar}
                  readTime={article.readTime}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 place-items-center my-8 mx-12 xl:mx-24 ">
        <Image
          src="/images/felix-profile.jpg"
          alt="Logo"
          width={300}
          height={300}
          className={`rounded-full transition-opacity duration-300 mr-8 border-2 ${theme === 'light' ? 'border-black' : 'border-white'}`}
        />
        <div className="ml-8">
          <h3>Felix Tessier</h3>
          <p className="font-bold text-2xl my-2">
            Full Stack Software Developer
          </p>
          <p className="text-xl my-2">
            I&#39;m currently working as a Software Developer at Price
            Industries Ltd.
          </p>
          <div className="my-2">
            <Link
              href="https://www.linkedin.com/in/felix-tessier-48486824b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`${theme === 'light' ? '/icons/linkedin_fill.svg' : '/icons/linkedin_line.svg'}`}
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
                src={`${theme === 'light' ? '/icons/github_fill.svg' : '/icons/github_line.svg'}`}
                alt="Github"
                width={36}
                height={36}
                className="inline-block mr-4 hover:opacity-70 transition-opacity duration-300"
              />
            </Link>
            <Image
              src={`${theme === 'light' ? '/icons/mail_line_dark.svg' : '/icons/mail_line.svg'}`}
              alt="mail"
              width={36}
              height={36}
              className="inline-block mr-4 hover:opacity-70 transition-opacity duration-300"
            />
          </div>
          <Link
            href="/documents/CV_Felix_Tessier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--h-color)] brightness-85 hover:brightness-100 px-8 py-4 rounded-2xl text-2xl font-semibold text-white text-center my-2 transition"
            role="button"
          >
            Resume
          </Link>
        </div>
      </div>
      <div
        className={`border-y-2 ${theme === 'light' ? 'border-black' : 'border-white'}`}
      >
        <div className="my-8 mx-12 xl:mx-24">
          <h1>About</h1>
          <p className="my-2">
            I started off my professional career as a Project Engineer in the
            manufacturing industry. Although I was having fun, I never felt
            fulfilled with my day-to-day tasks. I chose to pick up programming
            as a hobby one day and was immediately invested. I started writing
            macros in Excel at work to automate repetitive tasks which ended up
            saving me several hours of work per week. The fun I had while
            programming was more than enough to convince myself to pursue a
            career in software development.{' '}
          </p>
          <p className="my-2">
            To become a developer, I spent countless hours going through
            courses, building projects, and reading programming books after
            work. My genuine curiosity about how software applications were
            built really kept fueling my drive to keep learning. Even though
            there was tons of frustrating days spent debugging code, building
            functional applications felt very satisfying and rewarding.
            Eventually, the small wins turned into larger accomplishments, and
            what started as a hobby evolved into a career which I&#39;m deeply
            passionate about!{' '}
          </p>
          <p className="my-2">
            I now work as an Software Developer for Price Industries Ltd. Some
            of my responsibilities include building applications to streamline
            engineering procedures while continuously updating/maintaing legacy
            systems. I'm also fortunate to have the opportunity to develop tools
            using the most up to date LLMs and AI tools that to improve
            company-wide efficiency.
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center my-8 mx-12 xl:mx-24">
        <div className="mb-12 xl:mb-0">
          <div>
            <h1 className="!mt-0 mb-4">Thanks for stopping by!</h1>
            <p className="text-2xl font-bold">
              Have yourself a good and relaxing day.
            </p>
          </div>
          <div className="space-y-6 pt-8">
            <div className="space-y-2">
              <p className="text-lg">
                Want to know when I publish new content?
              </p>
              <p className="text-lg">Enter your email to be notified!</p>
            </div>
            <div className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-200 text-gray-900 border-0 flex-1 h-12 rounded-lg px-4"
              />
              <button className="bg-[var(--h-color)] font-bold brightness-85 hover:brightness-100 text-white px-6 rounded-lg transition cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/software-dev-edited.svg"
            alt="Developer working at computer"
            width={400}
            height={300}
            className="w-full max-w-md h-auto"
          />
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-semibold">Disclaimer:</span> I don't own this
            image, please don't sue.
          </p>
        </div>
      </div>
    </div>
  );
}
