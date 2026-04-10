import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Cooking BEN</p>
          <p className="mt-3 text-sm text-zinc-500">
            Crafted for delicious recipes, inspiring articles, and cooking adventures.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
