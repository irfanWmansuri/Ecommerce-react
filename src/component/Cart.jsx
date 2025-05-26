import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const { cartList } = useContext(CartContext);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalCartPrice(total);
  }, [cartList]);

  return (
    <div className="cartbox">
      <h3 className="dark:text-white">{cartList.length < 1 ? "Your cart is empty" : ""}</h3>
      <ul>
        {cartList.map((item, index) => (
          <li className="grid grid-cols-2 peer mt-4" key={index}>
            <div>
              <h3 className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(item.price)}</p>
            </div>
            <div className="flex items-center justify-end gap-1">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
            </div>
          </li>
        ))}
        {cartList.length > 0 && (
          <li>
            <div className="totalsec border-t-2 mt-2 pt-2 flex justify-between truncate text-sm font-semibold leading-none text-blue-300 dark:text-blue">
              <span>{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(totalCartPrice)}</span>
              <p>Total</p>
            </div>
          </li>
        )}
      </ul>
      {cartList.length > 0 && (
        <NavLink to="/mycart" className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Proceed to Mycart
        </NavLink>
      )}
    </div>
  );
}
