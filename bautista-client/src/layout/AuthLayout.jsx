import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">

        <div className="relative border-b-2 border-zinc-900 lg:border-b-0 lg:border-r-2">

          <img
            src="https://images.unsplash.com/photo-1691982801133-a3cccc047ded?fm=jpg&w=1600"
            alt="Cooking"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-zinc-900/20" />

          <div className="relative flex h-full items-end p-8 sm:p-10 lg:p-16">
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                Cooking Ben
              </h1>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Discover recipes, techniques, and culinary stories from around the world.
              </p>
            </div>
          </div>

        </div>

        <main className="flex items-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-8">
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;