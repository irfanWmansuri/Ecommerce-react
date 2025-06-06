import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { OrderSummary } from "../component/OrderSummary";

export function MyCart() {
  const [visibleCount, setVisibleCount] = useState(3);
  const { cartList, deleteFromLocal, IncrementItem, DecrementItem, originalItemPrice, addToCart } = useContext(CartContext);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">My Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartList.map((item, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <NavLink to={`/product/${item.id}`} className="shrink-0 md:order-1">
                      <img className="h-20 w-20 dark:hidden" src={item.thumbnail} alt="Thumbnail" />
                      <img className="hidden h-20 w-20 dark:block" src={item.thumbnail} alt="Thumbnail" />
                    </NavLink>

                    <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                    <div className="flex items-center justify-between md:order-4 md:justify-end">
                      <div className="flex items-center">
                        <button onClick={() => DecrementItem(item.id)} disabled={item.quantity == 1} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                          </svg>
                        </button>
                        <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" value={item.quantity} readOnly />
                        <button onClick={() => IncrementItem(item.id)} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(Math.trunc(item.price * item.quantity))}</p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <NavLink to={`/product/${item.id}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.title}</NavLink>

                      <div className="flex items-center gap-4">
                        <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                          <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                          </svg>
                          Add to Favorites
                        </button>

                        <button onClick={() => deleteFromLocal(item.id)} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                          <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className=" font-medium text-green-600 text-xs md:order-3">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format((item.price))} / Item</p>
                  </div>
                </div>
              ))}

            </div>
            <div className="hidden xl:mt-8 xl:block">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
              <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                {cartList.slice(0, visibleCount).map((item, index) => (
                  <div key={index} className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <NavLink to={`/product/${item.id}`} className="overflow-hidden rounded">
                      <img className="mx-auto h-44 w-44 dark:hidden" src={item.thumbnail} alt="imac image" />
                      <img className="mx-auto hidden h-44 w-44 dark:block" src={item.thumbnail} alt="imac image" />
                    </NavLink>
                    <div>
                      <NavLink to="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{item.title}</NavLink>
                      {/* <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 h-[144px]">{item.description}</p> */}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        <span className=""> {Intl.NumberFormat('en-IN', {type: 'Currency', currency: 'INR', maximumFractionDigits: 0}).format(Math.trunc(item.price))}</span>
                      </p>
                      <p className="line-through text-lg font-bold leading-tight text-red-600 dark:text-red-500">{Intl.NumberFormat('en-IN', {type: 'Currency', currency: 'INR', maximumFractionDigits: 0}).format(Math.trunc(originalItemPrice(item)))}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2.5">
                      <button data-tooltip-target="favourites-tooltip-1" type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                        </svg>
                      </button>
                      <div id="favourites-tooltip-1" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                        Add to favourites
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <button type="button" onClick={() => addToCart(item)} className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800">
                        <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {visibleCount < cartList.length && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 3)}
                      className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800"
                    >Show More
                    </button>
                  </div>
                )}
          </div>
          <OrderSummary />
        </div>
      </div>
    </section>
  )
}