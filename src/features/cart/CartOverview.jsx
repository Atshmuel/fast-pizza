import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="to-white-900 flex justify-between bg-gradient-to-r from-cyan-500 via-sky-500 px-2 py-2 uppercase  text-stone-100 sm:px-4">
      <p className="space-x-4 font-semibold ">
        <span>23 pizzas </span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="text-stone-900">
        Open Cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
