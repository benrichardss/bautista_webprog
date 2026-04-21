import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-2xl border-2 border-zinc-900 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white outline-none';

const SignInPage = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Continue your culinary journey.
      </p>

      <form className="mt-6 space-y-5">

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="accent-zinc-900" />
            Remember me
          </label>

          <button className="text-zinc-600 hover:text-zinc-900">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className="w-full py-3">
          Log In
        </Button>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary">Google</Button>
          <Button variant="secondary">Apple</Button>
        </div>
      </form>

      <p className="mt-6 text-sm text-zinc-600">
        No account?{' '}
        <Link to="/auth/signup" className="font-semibold text-zinc-900">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default SignInPage;