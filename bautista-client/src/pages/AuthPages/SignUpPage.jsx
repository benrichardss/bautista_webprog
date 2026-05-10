import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createUser } from '../../services/UserService';

const inputClasses =
  'mt-2 w-full rounded-2xl border-2 border-zinc-900 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white outline-none';

const SignUpPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    age: '',
    gender: '',
    contactNumber: '',
    address: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUser({
        ...form,
        type: 'viewer',
        isActive: true,
      });
      navigate('/auth/signin');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to create your account.');
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold">Create an account</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Start exploring recipes and sharing your cooking journey.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First name</label>
            <input
              value={form.firstName}
              onChange={handleChange('firstName')}
              placeholder="First name"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last name</label>
            <input
              value={form.lastName}
              onChange={handleChange('lastName')}
              placeholder="Last name"
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            placeholder="you@email.com"
            className={inputClasses}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              value={form.username}
              onChange={handleChange('username')}
              placeholder="Username"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Age</label>
            <input
              type="number"
              value={form.age}
              onChange={handleChange('age')}
              placeholder="Age"
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Contact number</label>
            <input
              value={form.contactNumber}
              onChange={handleChange('contactNumber')}
              placeholder="Contact number"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Gender</label>
            <select
              value={form.gender}
              onChange={handleChange('gender')}
              className={`${inputClasses} bg-white`}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Address</label>
          <textarea
            value={form.address}
            onChange={handleChange('address')}
            placeholder="Address"
            rows={3}
            className={`${inputClasses} resize-none`}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>

          <div className="relative mt-2">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={form.password}
              onChange={handleChange('password')}
              required
              placeholder="••••••••"
              className={`${inputClasses} pr-12`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center"
            >
              {showPassword ? <Visibility className="block" /> : <VisibilityOff className="block" />}
            </button>
          </div>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <Button type="submit" variant="primary" className="w-full py-3">
          Create Account
        </Button>
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