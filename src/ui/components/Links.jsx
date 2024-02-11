import { Link, useNavigate } from "react-router-dom";

export default function Links({ to, styles, children }) {
  const navigate = useNavigate();
  const className = `text-sm text-blue-500 hover:text-blue-600 hover:underline ${styles}`;
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}