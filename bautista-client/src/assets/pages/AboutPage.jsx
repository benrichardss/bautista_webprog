import Button from '../components/Button';

const articleImgSrc = [
  "https://images.unsplash.com/photo-1691982801689-e6e953d5af76" +
  "?w=1080&fm=jpg",

  "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a" +
  "?w=1080&fm=jpg",

  "https://images.unsplash.com/photo-1720949579179-b4d04403f548" +
  "?w=1080&fm=jpg",

  "https://images.unsplash.com/photo-1691982800089-cb7a29c4596b" +
  "?w=1080&fm=jpg",
];

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80"
              alt="Delicious food"
              className="h-72 w-full rounded-[1.25rem] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Cooking Ben
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A passion for food, a love for sharing
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Welcome to Cooking Ben, your go-to destination for culinary inspiration and delicious adventures. Food is more than sustenance—it's a way to connect, celebrate, and explore cultures from around the world.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Founded by passionate food lovers, our mission is to share recipes, techniques, and stories that make cooking enjoyable for everyone.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Culinary Journey Highlights
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years in the Kitchen
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">16</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Recipes Developed
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">09</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Culinary Challenges
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Global Adventures
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Our Story
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Culinary Experiences
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  About Cooking Ben
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Welcome to Cooking Ben, where passion meets the plate. Discover recipes, tips, and stories from a culinary enthusiast dedicated to making cooking accessible and fun.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Cooking Expertise
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  From simple weeknight meals to elaborate feasts, explore techniques and recipes that bring flavor and joy to every kitchen adventure.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Favorite Recipes
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Dive into a collection of tried-and-true recipes, from comforting classics to innovative twists that inspire your next culinary creation.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Image Gallery
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={articleImgSrc[0]}
                  alt="Article 01 image"
                  className="aspect-[1/1] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={articleImgSrc[1]}
                  alt="Article 02 image"
                  className="aspect-[1/1] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={articleImgSrc[2]}
                  alt="Article 03 image"
                  className="aspect-[1/1] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={articleImgSrc[3]}
                  alt="Article 04 image"
                  className="aspect-[1/1] w-full object-cover"
                />
              </div>              
            </div>
            <Button className="mt-5">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;