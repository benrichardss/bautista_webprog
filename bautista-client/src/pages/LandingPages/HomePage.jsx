import Button from '../../components/Button';

const articleImgSrc = [
  "https://images.unsplash.com/photo-1691982801689-e6e953d5af76" +
  "?w=1080&fm=jpg",

  "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a" +
  "?w=1080&fm=jpg",

  "https://images.unsplash.com/photo-1720949579179-b4d04403f548" +
  "?w=1080&fm=jpg",
];

const articleDescription = [
  "Learn the secrets to creating restaurant-quality pizza dough " +
  "in your own kitchen. " +
  "This foolproof recipe will change your pizza game forever.",

  "From croissants to éclairs, discover the techniques " +
  "that will help you bake like a Parisian patissier.",

  "Dive into the vibrant flavors of Thailand with this " +
  "traditional green curry recipe, made from scratch with fresh ingredients.",
];

const HomePage = () => {
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
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Recipes
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

          <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={articleImgSrc[0]}
                alt="Article 01 image"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">The Perfect Homemade Pizza Dough</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {articleDescription[0]}
            </p>
            <div className="mt-auto pt-4" >
              <Button variant="primary">View More</Button>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={articleImgSrc[1]}
                alt="Article 02 image"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Mastering the Art of French Pastries</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {articleDescription[1]}
            </p>
            <div className="mt-auto pt-4" >
              <Button variant="primary">View More</Button>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={articleImgSrc[2]}
                alt="Article 03 image"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Authentic Thai Green Curry</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {articleDescription[2]}
            </p>
            <div className="mt-auto pt-4" >
              <Button variant="primary">View More</Button>
            </div>
          </article>

        </div>
      </section>

    </div>
  );
};

export default HomePage;