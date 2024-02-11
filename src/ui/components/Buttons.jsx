import { Link } from "react-router-dom";

export default function buttons({ disabled = false, to, type, children }) {
  const base =
    "m-2 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-sky-700  font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-200 hover:text-stone-700 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:px-4",
    small: base + " text-xs px-1.5 py-1.5 md:px-5 md:py-2.5 md:text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
