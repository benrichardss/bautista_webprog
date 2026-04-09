import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl rounded-[2rem] border-2 border-zinc-900 bg-white p-10 shadow-2xl shadow-zinc-200/50">
        <div className="mb-8 rounded-3xl border border-zinc-200 bg-zinc-950 px-6 py-7 text-zinc-50">
          <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">404 error</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white">Page not found</h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
            The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
          </p>
        </div>

        <div className="space-y-6 text-zinc-700 sm:space-y-8">
          <p className="text-base leading-7">
            Try returning home, browsing the article list, or checking the URL for typos. If you think this is a mistake, the link may be broken.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/" variant="primary">Back to Home</Button>
            <Button to="/articles">Browse Articles</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;