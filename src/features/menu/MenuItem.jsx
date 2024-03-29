import { formatCurrency } from "../../utils/helpers";
import Buttons from "../../ui/components/Buttons";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 ${soldOut ? " opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5 ">
        <p className="font-medium ">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && <Buttons type="small">add to cart</Buttons>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
