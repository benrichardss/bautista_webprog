import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../services/ArticleService';

const HomePage = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const articleImages = [
    "https://images.unsplash.com/photo-1691982801689-e6e953d5af76?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1720949579179-b4d04403f548?w=1080&fm=jpg",
    "https://images.unsplash.com/photo-1691982800089-cb7a29c4596b?w=1080&fm=jpg",
  ];

  useEffect(() => {
    const loadFeaturedArticles = async () => {
      try {
        const { data } = await fetchArticles();
        const allActive = data.articles.filter(article => article.isActive);
        const featured = data.articles.filter(article => article.featured && article.isActive).slice(0, 3);
        
        // Map featured articles with their index in the full active articles list
        const featuredWithIndex = featured.map(article => ({
          ...article,
          fullIndex: allActive.findIndex(a => a._id === article._id)
        }));
        
        setFeaturedArticles(featuredWithIndex);
      } catch (error) {
        console.error('Error fetching featured articles:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFeaturedArticles();
  }, []);

  const defaultImg = "https://images.unsplash.com/photo-1691982801689-e6e953d5af76?w=1080&fm=jpg";

  return (
    <div className="flex w-full flex-col gap-6">

      {/* Hero Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to Cooking Ben
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Discover delicious recipes, cooking tips, and culinary adventures from around the world.
            Join us on a journey through flavors, techniques, and the stories behind every dish.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">Learn More</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-2">
            <img
              src="https://images.unsplash.com/photo-1691982801133-a3cccc047ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Delicious pizza being served"
              className="h-65 w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Culinary Journey Highlights
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">{featuredArticles.length}</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Featured Recipes
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Cooking Tips
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Culinary Adventures
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Cooking Challenges
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Explore our featured content
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {loading ? (
            <p>Loading featured articles...</p>
          ) : featuredArticles.length > 0 ? (
            featuredArticles.map((article) => (
              <article key={article._id} className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Article {String(article.fullIndex + 1).padStart(2, '0')}
                  </p>
                  <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                    Featured
                  </span>
                </div>
                <div className="overflow-hidden rounded-[1.25rem]">
                  <img
                    src={articleImages[article.fullIndex % articleImages.length]}
                    alt={article.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {article.content.substring(0, 150)}...
                </p>
                <div className="mt-auto pt-4" >
                  <Button to={`/articles/${article.slug}`} variant="secondary">View More</Button>
                </div>
              </article>
            ))
          ) : (
            <p>No featured articles available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;