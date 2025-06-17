import ArticleCard from "@/components/ArticleCard";
import { CardData } from "@/data/ArticlesCardData";

export default function Home() {
  return (
    <div className="px-4">
      <h1>Featured Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
