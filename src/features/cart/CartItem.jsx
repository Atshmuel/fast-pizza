import { formatCurrency } from "../../utils/helpers";
import Buttons from "../../ui/components/Buttons";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-3">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Buttons type="small">Delete</Buttons>
      </div>
    </li>
  );
}

export default CartItem;
