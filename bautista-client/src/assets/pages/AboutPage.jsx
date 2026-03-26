import Button from "../components/Button";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* Hero Section */}
      <section className="border-y border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80"
            alt="Delicious food"
            className="h-72 w-full rounded-3xl object-cover"
          />

          {/* Text Content */}
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
              <Button to="/">Back Home</Button>
              <Button to="/articles" variant="primary">
                Open Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Features
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Made with Love */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
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
                className="w-8 h-8 text-primary"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-zinc-900">Made with Love</h3>
            <p className="text-sm text-zinc-600">
              Every recipe is tested and perfected with care and attention to detail.
            </p>
          </div>

          {/* Global Flavors */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-zinc-900">Global Flavors</h3>
            <p className="text-sm text-zinc-600">
              Explore cuisines from every corner of the world, right in your kitchen.
            </p>
          </div>

          {/* Community Driven */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-zinc-900">Community Driven</h3>
            <p className="text-sm text-zinc-600">
              Join thousands of food enthusiasts sharing their love for cooking.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-y border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-4xl mx-auto bg-accent p-8 rounded-lg text-center">
          <h3 className="mb-4 text-2xl font-semibold text-zinc-900">Our Philosophy</h3>
          <p className="mb-4 text-sm text-zinc-600">
            We believe cooking should be fun, creative, and rewarding. Our recipes are approachable yet impressive, using fresh ingredients and clear instructions anyone can follow.
          </p>
          <p className="text-sm text-zinc-600">
            Join us as we explore the wonderful world of food, one recipe at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;