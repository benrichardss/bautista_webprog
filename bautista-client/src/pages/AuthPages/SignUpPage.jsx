import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-2xl border-2 border-zinc-900 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white outline-none';

const SignUpPage = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Create an account</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Start exploring recipes and sharing your cooking journey.
      </p>

      <form className="mt-6 space-y-5">

        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First name" className={inputClasses} />
          <input placeholder="Last name" className={inputClasses} />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" placeholder="you@email.com" className={inputClasses} />
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input type="password" placeholder="••••••••" className={inputClasses} />
        </div>

        <Button type="submit" variant="primary" className="w-full py-3">
          Create Account
        </Button>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary">Google</Button>
          <Button variant="secondary">Apple</Button>
        </div>
      </form>

      <p className="mt-6 text-sm text-zinc-600">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-zinc-900">
          Log in
        </Link>
      </p>
    </>
  );
};

export default SignUpPage;