import Button from "../components/Button";

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
  {
    title: "Farm-to-Table: Seasonal Cooking Guide",
    category: "Healthy Eating",
    author: "Emma Thompson",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1691982800089-cb7a29c4596b" +
      "?w=1080&fm=jpg",
    description:
      "Learn how to cook with the seasons and make the most " +
      "of fresh, local produce throughout the year.",
  },
  {
    title: "The Ultimate Guide to Grilling",
    category: "BBQ & Grilling",
    author: "Mike Johnson",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1691982799398-d0c90052830a" +
      "?w=1080&fm=jpg",
    description:
      "Master the grill with expert tips on temperature control, " +
      "marinades, and techniques for perfect results every time.",
  },
  {
    title: "Decadent Chocolate Desserts",
    category: "Desserts",
    author: "Sophie Martin",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1572897305554-9b38c937edba" +
      "?w=1080&fm=jpg",
    description:
      "Indulge your sweet tooth with these irresistible chocolate " +
      "dessert recipes that will impress any crowd.",
  },
];

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="border-y border-zinc-900 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>

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

      <section className="border-zinc-900 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
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

export default ArticlePage;