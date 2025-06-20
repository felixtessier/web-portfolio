'use client';

import ArticleCard from '@/components/ArticleCard';
import { CardData } from '@/data/ArticlesCardData';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function Posts() {
  const { theme } = useTheme();

  return (
    <div className="mx-12 xl:mx-24 my-8">
      <h1>All Posts</h1>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8`}
      >
        {CardData.map((article, index) => (
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
  );
}
