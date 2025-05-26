import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { Coupon } from "./Coupon";

export function OrderSummary() {
  const { totalCartPrice, priceAfterDiscount, discountTotal } = useContext(CartContext);
  const [sgst, setSgst] = useState(0);

  
    useEffect(()=> {
      const basePrice = priceAfterDiscount ?? totalCartPrice;
      const totalWithSGST = basePrice + (basePrice * 8) /100;
        setSgst(totalWithSGST);
    }, [priceAfterDiscount, totalCartPrice]);
  
    return(
        <>
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2}).format(totalCartPrice)}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-600">-{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2}).format(discountTotal)}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">SGST</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">8%</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">CGST</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">12%</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                {priceAfterDiscount ? Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 2}).format(priceAfterDiscount) : Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 2}).format(totalCartPrice)
                }</dd>
            </dl>
          </div>

          <NavLink to="/payment" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-blue-500 dark:hover:bg-blue-400">Proceed to Payment</NavLink>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <NavLink to="/" className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 underline hover:no-underline ">
              Continue Shopping
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </NavLink>
          </div>
        </div>
    <Coupon />
      </div>
        </>
    )
}