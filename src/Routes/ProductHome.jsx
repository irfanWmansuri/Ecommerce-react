import ProductHomeCard from '../component/ProductHomeCard';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Offer } from '../component/Offer';
import { CartContext } from '../context/CartContext';

export function ProductHome() {
  const {userProducts} = useContext(CartContext);
  
  const [data, setData] = useState([])
  const [productLimit, setProductLimit] = useState(20);
  const [loading, setLoading] = useState(true);
  
  
  const loadMore = () => {
    setLoading(!loading);
    setProductLimit(limit => limit+20);
  }
  
  const allProducts = [...userProducts, ...data];
  // console.log("User Products from Context:", userProducts);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios(`https://dummyjson.com/products?limit=${productLimit}`);
        let productData = response.data.products;
        
        const DollarToRupee = 85;

        const modifiedProduct = productData.map(product => ({
          ...product,
          price : Math.trunc(product.price * DollarToRupee),
          discountPercentage : Math.round(product.discountPercentage)
        }))
        setData(modifiedProduct);
        // console.log(modifiedProduct);
        
        return;
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }

    }
    fetchProduct()
  }, [productLimit]);

  
  return (
    <>
  
        <Offer />
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

          <div className="mb-4 space-y-4 sm:space-y-0 md:mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Electronics</h2>
          </div>
          <div className='productcardsec'>
            <ul className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {allProducts.map((item) =>
              (<li key={item.id}>
                <ProductHomeCard productItem={item} />
              </li>)
              )}
            </ul>
          </div>
          <div className="w-full text-center">
            <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" disabled={productLimit == 100} onClick={loadMore}> Show More</button>
          </div>
        </div>
      </section>    
    </>
  )
}

