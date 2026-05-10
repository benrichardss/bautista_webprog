import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article key={article.slug} className="flex flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Article {String(index + 1).padStart(2, '0')}
              </p>
              {article.featured && (
                <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                  Featured
                </span>
              )}
            </div>

            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={article.img}
                alt={article.title}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">{article.title}</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">{article.content.substring(0, 150)}...</p>

            <Link to={`/articles/${article.slug}`} className="mt-auto pt-4">
              <Button className="mt-4">Read More</Button>
            </Link>
          </article>
      ))}
    </div>
  );
};

export default ArticleList;