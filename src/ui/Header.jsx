import { Link } from "react-router-dom";
import UserName from "../features/user/UserName";
import SearchOrder from "../features/order/SearchOrder";
function Header() {
  return (
    <header className="to-white-900 flex items-center justify-between border-b border-stone-400 bg-gradient-to-r from-cyan-500 via-sky-500 p-3 px-4">
      <Link to="/" className="text-xl font-bold tracking-widest">
        Fast pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
