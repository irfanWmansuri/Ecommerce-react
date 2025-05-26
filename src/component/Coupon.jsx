import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast, { Toaster } from "react-hot-toast";

export function Coupon() {
  const { totalCartPrice, setDiscountTotal, setPriceAfterDiscount } = useContext(CartContext)
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const timeoutRef = useRef(null);
  const clearMessageRef = useRef(null);

  let istoday = new Date().toISOString().slice(0, 10)
  //  console.log(istoday);
  

  const verifyCoupon = async () => {
    try {
      const response = await axios('https://dummyjson.com/c/0294-0e3f-48a5-a683')
      const CouponData = response.data;

      if(timeoutRef.current){
        clearTimeout(timeoutRef.current);
      }
      const matchedCoupon = await CouponData.coupons.find((coupon) => couponInput === coupon.couponCode);
      const minPurchasPrice = matchedCoupon.minPurchase;
      const expiryDate = matchedCoupon.expiryDate;
      // console.log(expiryDate);
      
      
     if(expiryDate >= istoday){
      if(totalCartPrice > minPurchasPrice){

        timeoutRef.current = setTimeout(() => {
          if (matchedCoupon) {
            const CouponDiscountPercent = matchedCoupon.discount;
            const DiscountAmount = (totalCartPrice * CouponDiscountPercent) / 100;
            const FinalPrice = totalCartPrice - DiscountAmount;
            setDiscountTotal(DiscountAmount);
            setPriceAfterDiscount(FinalPrice);
            setIsCouponApplied(true);
  
            toast.success("Coupon applied successfully!");
  
            if(clearMessageRef.current){
              clearTimeout(clearMessageRef.current);
            }
  
            clearMessageRef.current = setTimeout(() => {
              setCouponError('');
            }, 2000);
  
          } else {
            setDiscountTotal(0);
            setPriceAfterDiscount(totalCartPrice)
          }
          }, 500);
        }
      else{
        toast.error(`The minimum purchase price for this coupon is ₹${minPurchasPrice} !`);
      } 
        
     }
     else{
      toast.error("Coupon is expired");
    }


    } catch (error) {
      console.error("Error fetching data:", error.message);
      // toast.error("Something went wrong. Try again!");
      toast.error("Invalid coupon code!");
    }

  }

  useEffect(() => {
    if (couponInput === '') {
      setCouponError('');
    }
  }, [couponInput])

  const resetCoupon = () => {
    setCouponInput("");
    setCouponError("");
    setIsCouponApplied(false);
    setDiscountTotal(0);
    setPriceAfterDiscount(totalCartPrice);
  };


  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="voucher" className="mb-2 block text-md font-medium text-gray-900 dark:text-white"> Coupon Code </label>
            <input type="text" value={couponInput} onChange={e => setCouponInput(e.target.value)} id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required disabled={isCouponApplied} />
            <p className={`mt-0.5 text-xs ${couponError === "Coupon Applied" ? "text-green-500" : "text-red-500"}`} >{couponError}</p>
          </div>
          <div className="flex gap-2">
          <button onClick={verifyCoupon} type="button" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-400" disabled={isCouponApplied}>Apply Code</button>
          {isCouponApplied &&
            <button  className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" onClick={resetCoupon}>Reset</button>
          }
          
        </div>
        </div>
      </div>
    </>
  )
}
