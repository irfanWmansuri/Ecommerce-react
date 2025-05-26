import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Payment() {
  const { totalCartPrice, discountTotal, priceAfterDiscount } = useContext(CartContext);
  const [cardExpiry, setCardExpiry] = useState(null);
    
    const cardNumberRef = useRef(null);
    const cardCvvRef = useRef(null);
   
    useEffect(() => {
      const handleCardInput = (e) => {
        const input = e.target.value.replace(/\D/g, "-").slice(0, 19);
        const formatted = input.replace(/(\d{4})(?=\d)/g, "$1 ");
        e.target.value = formatted;
      };

      const handleCvvInput = (e) => {
        const input = e.target.value.slice(0, 3);
        e.target.value = input;
      }
 
      const cvvInputEl = cardCvvRef.current;
      if(cvvInputEl){
        cvvInputEl.addEventListener("input", handleCvvInput);
      }

      const inputEl = cardNumberRef.current;
      if (inputEl) {
        inputEl.addEventListener("input", handleCardInput);
      }
  
      return () => {
        if (inputEl) {
          inputEl.removeEventListener("input", handleCardInput);
        }

        return () => {
          if (cvvInputEl) {
            cvvInputEl.addEventListener("input", handleCardInput);
          }
        };
      };
    }, []);



  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Full name (as displayed on card)*
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>

                {/* Card Number */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Card number*
                  </label>
                  <input
                  type="text"
                    id="card-number-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                    ref={cardNumberRef}
                  />
                </div>

                {/* Expiration Date */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Card expiration*
                  </label>
                  <DatePicker
                    selected={cardExpiry}
                    onChange={(date) => setCardExpiry(date)}
                    dateFormat="MM/yy"
                    showMonthYearPicker
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholderText="MM/YY"
                    id="card-expiration-input"
                    required
                  />
                </div>

                {/* CVV */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                    CVV*
                  </label>
                  <input
                    type="text"
                    id="cvv-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="•••"
                    required
                    ref={cardCvvRef}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
              >
                Pay now
              </button>
            </form>

            {/* Pricing Summary */}
            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <dl className="flex items-center justify-between">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    {Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 2}).format(totalCartPrice)
                }
                  </dd>
                </dl>
                <dl className="flex items-center justify-between">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                  <dd className="text-base font-medium text-green-500">-{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2}).format(discountTotal)}</dd>
                </dl>
                <dl className="flex items-center justify-between">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                </dl>
                <dl className="flex items-center justify-between">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                </dl>
                <dl className="flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    $
                    {priceAfterDiscount
                      ? priceAfterDiscount.toLocaleString(undefined, { minimumFractionDigits: 2 })
                      : totalCartPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </dd>
                </dl>
              </div>

              {/* Payment Logos */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="PayPal" />
                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="PayPal Dark" />
                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="Visa" />
                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="Visa Dark" />
                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="Mastercard" />
                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="Mastercard Dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
