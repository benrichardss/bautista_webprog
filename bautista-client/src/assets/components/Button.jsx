import { Link } from 'react-router-dom';

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition';

const variantClasses = {
  primary: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-700 border-2 border-zinc-900',
  secondary: 'bg-zinc-50 text-zinc-900 hover:bg-zinc-200 border-2 border-zinc-900',
  tertiary: 'bg-[#030213] text-zinc-50 hover:bg-[#030213]/80'
};

const Button = ({
    children,
    to,
    type = 'button',
    variant = 'secondary',
    className = '',
}) => {
    const classes = [
        baseClasses,
        variantClasses[variant] ?? variantClasses.secondary,
        className,
    ]
        .join(' ')
        .trim();

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes}>
            {children}
        </button>   
        );
    };

export default Button;