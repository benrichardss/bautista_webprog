import React, { useState } from 'react';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/UserService'


const inputClasses =
  'mt-2 w-full rounded-2xl border-2 border-zinc-900 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white outline-none';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      console.log('Login successful: ', data);

      localStorage.setItem('token', data.token);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('type', data.type);

      navigate('/dashboard', { state: { firstName: data.firstName, type: data.type } });
    } catch (err) {
      console.error('Login failed: ', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed, Please try again.');
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Continue your culinary journey.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleLogin}>

        <div>
          <label className="text-sm font-medium" htmlFor='email'>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@email.com"
            className={inputClasses}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor='password'>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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