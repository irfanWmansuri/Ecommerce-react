import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from "../context/CartContext";


export default function ProductHomeCard({ productItem }) {
  const { title, price, thumbnail } = productItem;
  const { addToCart, originalItemPrice } = useContext(CartContext);

 useEffect(() => {
  const tooltipButtons = document.querySelectorAll("[data-tooltip-target]");

  tooltipButtons.forEach((button) => {
    const tooltipId = button.getAttribute("data-tooltip-target");
    const tooltip = document.getElementById(tooltipId);
    if (!tooltip) return;

    const show = () => {
      tooltip.classList.remove("invisible", "opacity-0");
      tooltip.classList.add("visible", "opacity-100");

      const rect = button.getBoundingClientRect();
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollX = window.scrollX || document.documentElement.scrollLeft;

      tooltip.style.top = `${rect.top + scrollY - tooltip.offsetHeight - 8}px`;
      tooltip.style.left = `${rect.left + scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    };

    const hide = () => {
      tooltip.classList.add("invisible", "opacity-0");
      tooltip.classList.remove("visible", "opacity-100");
    };

    button.addEventListener("mouseenter", show);
    button.addEventListener("mouseleave", hide);

    return () => {
      button.removeEventListener("mouseenter", show);
      button.removeEventListener("mouseleave", hide);
    };
  });
}, []);
  

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 h-[100%]">
        <div className="h-56 w-full">
          <NavLink to={`/product/id/${productItem.id}`}>
            <img className="mx-auto h-full dark:hidden" src={thumbnail} alt="thumbnail" />
            <img className="mx-auto hidden h-full dark:block" src={thumbnail}  alt="thumbnail" />
          </NavLink>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            {originalItemPrice(productItem) > 10 &&
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> Up to {productItem.discountPercentage}% off </span>
            }

            <div>
              {/* <button type="button" data-tooltip-target="tooltip-quick-look" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                  <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </button>
              <div id="tooltip-quick-look" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow absolute w-2 h-2 bg-gray-700 rotate-45 left-1/2 -bottom-1 transform -translate-x-1/2 z-[999]"></div>
              </div> */}

              <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                </svg>
              </button>
              <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow absolute w-2 h-2 bg-gray-700 rotate-45  left-1/2 -bottom-1 transform -translate-x-1/2 z-[999]" ></div>
              </div>
            </div>
          </div>

          <NavLink  to={`/product/id/${productItem.id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{title}</NavLink>

          <div className="mt-2 flex items-center gap-2">
            <div className='flex items-center'>
            <p className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
            {Array.from({ length: Math.floor(productItem.rating) }).map((item, index) => (
              <svg key={index} className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-label="Star">
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            ))}
            {productItem.rating % 1 !== 0 && (
              <svg className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-label="Half Star">
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" clipPath="url(#half)" />
                  <defs>
                    <clipPath id="half">
                      <rect width="12" height="24" />
                    </clipPath>
                  </defs>
                </svg>
              )}

            </p>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({Array.isArray(productItem.reviews) ? productItem.reviews.length : 0})</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{productItem.category}</p>
            </li>
          </ul>
              
          <div className="mt-4 flex items-center justify-between gap-4">
           <div className="pricesec flex flex-col">
           <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(productItem.price > 10 ? productItem.price : originalItemPrice(productItem))}</p>
           {originalItemPrice(productItem) > 10 &&
            <p className='line-through text-red-600 dark:text-red-500'>{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(originalItemPrice(productItem))}</p>
           }
           </div>

            <button type="button" onClick={()=> addToCart(productItem)} className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

