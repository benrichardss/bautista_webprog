import Button from "../../components/Button.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleBySlug, fetchArticles } from "../../services/ArticleService.js";

const ArticlePage = () => {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const articleImages = [
    "https://images.unsplash.com/photo-1691982801689-e6e953d5af76?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1720949579179-b4d04403f548?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1691982800089-cb7a29c4596b?w=1080&fm=jpg",
  ];

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const { data: articleData } = await getArticleBySlug(name);
        const { data: allArticlesData } = await fetchArticles();
        
        // Get the index of the current article in the filtered active articles
        const activeArticles = allArticlesData.articles.filter(article => article.isActive);
        const articleIndex = activeArticles.findIndex(a => a.slug === name);
        
        // Add the image based on the index
        articleData.img = articleImages[Math.max(0, articleIndex) % articleImages.length];
        setArticle(articleData);
      } catch (err) {
        setError('Article not found');
      } finally {
        setLoading(false);
      }
    };
    loadArticle();
  }, [name]);

  if (loading) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-3xl font-bold text-zinc-900">Loading...</div>
          </div>
        </section>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">Article not found</h1>
            <Button to="/articles" className="mt-6">Back to Articles</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/articles">Back to Articles</Button>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            {article.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 mb-8">
            <img
              src={article.img}
              alt={article.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-zinc-700">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-zinc-900 pt-6">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;