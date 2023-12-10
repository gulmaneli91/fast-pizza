import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex  items-center justify-between bg-stone-800 text-stone-200 uppercase px-4 py-4 text-sm sm:px-6 sm:text-base ">
      <p className="font-semibold text-stone-300 space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
