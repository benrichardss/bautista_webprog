import { useEffect, useState } from 'react';
import Button from '../../components/Button.jsx';
import ArticleList from '../../components/ArticleList.jsx';
import { fetchArticles } from '../../services/ArticleService.js';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const articleImages = [
    "https://images.unsplash.com/photo-1691982801689-e6e953d5af76?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1720949579179-b4d04403f548?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1691982800089-cb7a29c4596b?w=1080&fm=jpg",
  ];

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const { data } = await fetchArticles();
        // Filter active articles and map to the expected format
        const activeArticles = data.articles
          .filter(article => article.isActive)
          .map((article, index) => ({
            slug: article.slug,
            title: article.title,
            content: article.content,
            featured: article.featured,
            img: articleImages[index % articleImages.length],
          }));
        setArticles(activeArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Explore our culinary creations
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Discover a curated collection of recipes, tips, and kitchen hacks to inspire your next meal.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            A selection of our most popular recipes and tips
          </h2>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;