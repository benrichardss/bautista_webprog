import Button from '../components/Button';

const articles = [
  {
    title: "The Perfect Homemade Pizza Dough",
    category: "Italian Cuisine",
    author: "Maria Rossi",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1691982801689-e6e953d5af76" +
      "?w=1080&fm=jpg",
    description:
      "Learn the secrets to creating restaurant-quality pizza dough " +
      "in your own kitchen. " +
      "This foolproof recipe will change your pizza game forever.",
  },
  {
    title: "Mastering the Art of French Pastries",
    category: "Baking",
    author: "Jean-Pierre Laurent",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a" +
      "?w=1080&fm=jpg",
    description:
      "From croissants to éclairs, discover the techniques " +
      "that will help you bake like a Parisian patissier.",
  },
  {
    title: "Authentic Thai Green Curry",
    category: "Asian Cuisine",
    author: "Suda Chen",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1720949579179-b4d04403f548" +
      "?w=1080&fm=jpg",
    description:
      "Dive into the vibrant flavors of Thailand with this " +
      "traditional green curry recipe, made from scratch with fresh ingredients.",
  },
];

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1691982801133-a3cccc047ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
          alt="Delicious pizza being served"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hero content */}
        <div className="relative z-20 text-center text-white px-4 max-w-3xl">
          <h1 className="mb-4 text-5xl font-bold">
            Welcome to Cooking Ben
          </h1>
          <p className="text-xl mb-8">
            Discover delicious recipes, cooking tips, and culinary adventures from around the world.
            Join us on a journey through flavors, techniques, and the stories behind every dish.
          </p>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-zinc-900">Featured Articles</h2>
          <p className="mt-2 text-zinc-500">Explore our latest culinary stories and recipes</p>
          <Button
      to="/articles"
      variant="tertiary"
      className="mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
    >
      View All Recipes
    </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-200 bg-accent text-accent-foreground rounded-full text-sm">
                    {article.category}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-zinc-900">{article.title}</h3>
                <p className="text-zinc-400 mb-4 line-clamp-3 text-sm">{article.description}</p>
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;