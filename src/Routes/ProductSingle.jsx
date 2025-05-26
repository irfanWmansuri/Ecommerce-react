import { useState, useEffect, useContext } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { Toaster } from 'react-hot-toast';
import 'react-inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from "react-inner-image-zoom";

export default function ProductSingle() {
  const [ViewRevModal, setViewRevModal] = useState(false);
  const { addToCart, originalItemPrice } = useContext(CartContext);
  const [addReviewCount, setAddReviewCount] = useState(0);
  const [filterToggle, setFilterToggle] = useState(false);

  const showReviewModal = () => {
    setViewRevModal(!ViewRevModal)
  }

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle)
  }

  const [SingleData, setSingleData] = useState(null);
  const { itemId } = useParams();
  // console.log(SingleData);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios(`https://dummyjson.com/products/${itemId}`);
        let SingleProductdata = response.data
        setSingleData(SingleProductdata)
      }
      catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchSingleProduct()
  }, [itemId]);


  return (
    <>
      <Toaster position="top-right" />
      {SingleData ? (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="flex items-center space-x-4">
              <button onClick={handleFilterToggle} data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                </svg>
                Filters
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                </svg>
                Sort
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <div id="dropdownSort1" className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom">
                <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton">
                  <li>
                    <NavLink to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> The most popular </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Newest </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Increasing price </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Decreasing price </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> No. reviews </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Discount % </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Filter modal --> */}
            <div className="filtermodalsec">
              <form action="#" method="get" id="filterModal" aria-hidden="true" className={`fixed left-0 right-0 top-0 z-50  h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full ${filterToggle ? "flex  justify-center" : "hidden"}`}>
                <div className="relative h-full w-full max-w-xl md:h-auto">
                  {/* <!-- Modal content --> */}
                  <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between rounded-t p-4 md:p-5">
                      <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">Filters</h3>
                      <button type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="filterModal" onClick={() => setFilterToggle(false)}>
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="px-4 md:px-5">
                      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="-mb-px flex flex-wrap text-center text-sm font-medium" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                          <li className="mr-1" role="presentation">
                            <button className="inline-block pb-2 pr-1" id="brand-tab" data-tabs-target="#brand" type="button" role="tab" aria-controls="profile" aria-selected="false">Brand</button>
                          </li>
                          <li className="mr-1" role="presentation">
                            <button className="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300" id="advanced-filers-tab" data-tabs-target="#advanced-filters" type="button" role="tab" aria-controls="advanced-filters" aria-selected="false">Advanced Filters</button>
                          </li>
                        </ul>
                      </div>
                      <div id="myTabContent">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3" id="brand" role="tabpanel" aria-labelledby="brand-tab">
                          <div className="space-y-2">
                            <h5 className="text-lg font-medium uppercase text-black dark:text-white">A</h5>

                            <div className="flex items-center">
                              <input id="apple" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Apple (56) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="asus" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Asus (97) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="acer" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="acer" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Acer (234) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="allview" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="allview" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Allview (45) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="atari" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Atari (176) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="amd" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="amd" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> AMD (49) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="aruba" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="aruba" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Aruba (16) </label>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h5 className="text-lg font-medium uppercase text-black dark:text-white">B</h5>

                            <div className="flex items-center">
                              <input id="beats" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="beats" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Beats (56) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="bose" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="bose" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Bose (97) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="benq" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> BenQ (45) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="bosch" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="bosch" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Bosch (176) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="brother" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="brother" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Brother (176) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="biostar" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="biostar" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Biostar (49) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="braun" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="braun" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Braun (16) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="blaupunkt" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="blaupunkt" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Blaupunkt (45) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="benq2" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="benq2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> BenQ (23) </label>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h5 className="text-lg font-medium uppercase text-black dark:text-white">C</h5>

                            <div className="flex items-center">
                              <input id="canon" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="canon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Canon (49) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="cisco" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="cisco" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Cisco (97) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="cowon" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="cowon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Cowon (234) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="clevo" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="clevo" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Clevo (45) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="corsair" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="corsair" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Corsair (15) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="csl" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="csl" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Canon (49) </label>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h5 className="text-lg font-medium uppercase text-black dark:text-white">D</h5>

                            <div className="flex items-center">
                              <input id="dell" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dell (56) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="dogfish" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="dogfish" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dogfish (24) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="dyson" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="dyson" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dyson (234) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="dobe" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="dobe" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dobe (5) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="digitus" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="digitus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Digitus (1) </label>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h5 className="text-lg font-medium uppercase text-black dark:text-white">E</h5>

                            <div className="flex items-center">
                              <input id="emetec" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="emetec" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Emetec (56) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="extreme" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="extreme" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Extreme (10) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="elgato" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="elgato" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Elgato (234) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="emerson" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="emerson" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Emerson (45) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="emi" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="emi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> EMI (176) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="fugoo" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="fugoo" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fugoo (49) </label>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h5 className="text-lg font-medium uppercase text-black dark:text-white">F</h5>

                            <div className="flex items-center">
                              <input id="fujitsu" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="fujitsu" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fujitsu (97) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="fitbit" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fitbit (56) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="foxconn" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="foxconn" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Foxconn (234) </label>
                            </div>

                            <div className="flex items-center">
                              <input id="floston" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                              <label htmlFor="floston" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Floston (45) </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4" id="advanced-filters" role="tabpanel" aria-labelledby="advanced-filters-tab">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="min-price" className="block text-sm font-medium text-gray-900 dark:text-white"> Min Price </label>
                              <input id="min-price" type="range" min="0" max="7000" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                            </div>

                            <div>
                              <label htmlFor="max-price" className="block text-sm font-medium text-gray-900 dark:text-white"> Max Price </label>
                              <input id="max-price" type="range" min="0" max="7000" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                            </div>

                            <div className="col-span-2 flex items-center justify-between space-x-2">
                              <input type="number" id="min-price-input" min="0" max="7000" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 " placeholder="" required />

                              <div className="shrink-0 text-sm font-medium dark:text-gray-300">to</div>

                              <input type="number" id="max-price-input" min="0" max="7000" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <label htmlFor="min-delivery-time" className="block text-sm font-medium text-gray-900 dark:text-white"> Min Delivery Time (Days) </label>

                              <input id="min-delivery-time" type="range" min="3" max="50" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                            </div>

                            <input type="number" id="min-delivery-time-input" min="3" max="50" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 " placeholder="" required />
                          </div>
                        </div>

                        <div>
                          <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Condition</h6>

                          <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                            <li className="w-full border-r border-gray-200 dark:border-gray-600">
                              <div className="flex items-center pl-3">
                                <input id="condition-all" type="radio" name="list-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                                <label htmlFor="condition-all" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> All </label>
                              </div>
                            </li>
                            <li className="w-full border-r border-gray-200 dark:border-gray-600">
                              <div className="flex items-center pl-3">
                                <input id="condition-new" type="radio" name="list-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                                <label htmlFor="condition-new" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> New </label>
                              </div>
                            </li>
                            <li className="w-full">
                              <div className="flex items-center pl-3">
                                <input id="condition-used" type="radio" name="list-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                                <label htmlFor="condition-used" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Used </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                          <div>
                            <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Colour</h6>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <input id="blue" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="blue" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                                  <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600"></div>
                                  Blue
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="gray" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="gray" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                                  <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400"></div>
                                  Gray
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="green" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                                  <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400"></div>
                                  Green
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="pink" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="pink" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                                  <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400"></div>
                                  Pink
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="red" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="red" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                                  <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                                  Red
                                </label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Rating</h6>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <input id="five-stars" type="radio" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                <label htmlFor="five-stars" className="ml-2 flex items-center">
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fifth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="four-stars" type="radio" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                <label htmlFor="four-stars" className="ml-2 flex items-center">
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fifth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="three-stars" type="radio" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                <label htmlFor="three-stars" className="ml-2 flex items-center">
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fifth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="two-stars" type="radio" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                <label htmlFor="two-stars" className="ml-2 flex items-center">
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fifth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                </label>
                              </div>

                              <div className="flex items-center">
                                <input id="one-star" type="radio" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                <label htmlFor="one-star" className="ml-2 flex items-center">
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fifth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Weight</h6>

                            <div className="space-y-2">
                              <div className="flex items-center">
                                <input id="under-1-kg" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="under-1-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Under 1 kg </label>
                              </div>

                              <div className="flex items-center">
                                <input id="1-1-5-kg" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="1-1-5-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 1-1,5 kg </label>
                              </div>

                              <div className="flex items-center">
                                <input id="1-5-2-kg" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="1-5-2-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 1,5-2 kg </label>
                              </div>

                              <div className="flex items-center">
                                <input id="2-5-3-kg" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="2-5-3-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 2,5-3 kg </label>
                              </div>

                              <div className="flex items-center">
                                <input id="over-3-kg" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                                <label htmlFor="over-3-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Over 3 kg </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Delivery type</h6>

                          <ul className="grid grid-cols-2 gap-4">
                            <li>
                              <input type="radio" id="delivery-usa" name="delivery" value="delivery-usa" className="peer hidden" />
                              <label htmlFor="delivery-usa" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                                <div className="block">
                                  <div className="w-full text-lg font-semibold">USA</div>
                                  <div className="w-full">Delivery only for USA</div>
                                </div>
                              </label>
                            </li>
                            <li>
                              <input type="radio" id="delivery-europe" name="delivery" value="delivery-europe" className="peer hidden" />
                              <label htmlFor="delivery-europe" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                                <div className="block">
                                  <div className="w-full text-lg font-semibold">Europe</div>
                                  <div className="w-full">Delivery only for USA</div>
                                </div>
                              </label>
                            </li>
                            <li>
                              <input type="radio" id="delivery-asia" name="delivery" value="delivery-asia" className="peer hidden" />
                              <label htmlFor="delivery-asia" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                                <div className="block">
                                  <div className="w-full text-lg font-semibold">Asia</div>
                                  <div className="w-full">Delivery only for Asia</div>
                                </div>
                              </label>
                            </li>
                            <li>
                              <input type="radio" id="delivery-australia" name="delivery" value="delivery-australia" className="peer hidden" />
                              <label htmlFor="delivery-australia" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                                <div className="block">
                                  <div className="w-full text-lg font-semibold">Australia</div>
                                  <div className="w-full">Delivery only for Australia</div>
                                </div>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
                      <button type="submit" className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">Show 50 results</button>
                      <button type="reset" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Reset</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16" >
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img className="w-full dark:hidden" src={SingleData.thumbnail} alt="item-image" />
                <InnerImageZoom className="w-full hidden dark:block zoom" src={SingleData.images[0]} alt="single-item-image" />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <div className="titlebox flex gap-4">
                  <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                    {SingleData.title}
                  </h1>
                  <span className={`inline-block px-2 py-1 text-white rounded-sm text-[14px] ${SingleData.stock < 10 ? 'bg-red-700' : 'bg-green-500'}`}>{SingleData.availabilityStatus}</span>
                </div>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white" >
                    ${SingleData.price}
                  </p>
                  <p className='line-through text-red-600 dark:text-red-500'>${originalItemPrice(SingleData).toFixed(2)}</p>
                  <p className={`text-white ml-8 p-2 rounded-sm text-[14px] ${SingleData.stock < 10 ? 'bg-red-700' : 'd-none ml-0 p-0'}`}>{SingleData.stock < 10 ? `Only ${SingleData.stock} is left` : ``}</p>
                </div>

                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <NavLink
                    to="/"
                    title=""
                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to favorites
                  </NavLink>

                  <NavLink
                    title=""
                    className="text-white mt-4 sm:mt-0 bg-[#2563EB] hover:bg-[#1D4ED8] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                    role="button"
                    onClick={() => { addToCart(SingleData) }}
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>

                    Add to cart
                  </NavLink>
                </div>

                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

                  <div className="mt-2 flex items-center gap-2 sm:mt-0">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: Math.floor(SingleData.rating) }).map((item, index) => (
                        <svg key={index} className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-label="Star">
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                      ))}
                      {SingleData.rating % 1 !== 0 && (
                        <svg className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-label="Half Star">
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" clipPath="url(#half)" />
                          <defs>
                            <clipPath id="half">
                              <rect width="12" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <p className="text-sm font-medium leading-none text-black dark:text-white">({SingleData.rating})</p>
                    <a to="/reviewsec" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"> {SingleData.reviews.length} Reviews </a>
                  </div>
                </div>

                <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
                  <div className="shrink-0 space-y-4">
                    <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">{SingleData.rating} out of 5</p>
                    <button type="button" onClick={showReviewModal} data-modal-target="review-modal" data-modal-toggle="review-modal" className="mb-2 me-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Write a review</button>
                  </div>

                  <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">5</p>
                      <svg className="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-1.5 rounded-full bg-yellow-300" style={{ width: "20%" }}></div>
                      </div>
                      <a to="/" className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-white sm:w-auto sm:text-left">239 <span className="hidden sm:inline">reviews</span></a>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">4</p>
                      <svg className="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-1.5 rounded-full bg-yellow-300" style={{ width: '60%' }}></div>
                      </div>
                      <a to="/" className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:dark:text-white sm:w-auto sm:text-left">432 <span className="hidden sm:inline">reviews</span></a>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">3</p>
                      <svg className="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-1.5 rounded-full bg-yellow-300" style={{ width: "15%" }}></div>
                      </div>
                      <a to="/" className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:dark:text-white sm:w-auto sm:text-left">53 <span className="hidden sm:inline">reviews</span></a>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">2</p>
                      <svg className="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-1.5 rounded-full bg-yellow-300" style={{ width: "5%" }}></div>
                      </div>
                      <a to="/" className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:dark:text-white sm:w-auto sm:text-left">32 <span className="hidden sm:inline">reviews</span></a>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">1</p>
                      <svg className="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-1.5 rounded-full bg-yellow-300" style={{ width: "0%" }}></div>
                      </div>
                      <a to="/" className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:dark:text-white sm:w-auto sm:text-left">13 <span className="hidden sm:inline">reviews</span></a>
                    </div>
                  </div>
                </div>
                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                <ul>
                  <li className="text-white">{SingleData.shippingInformation}</li>
                  <li className="text-white">{SingleData.returnPolicy}</li>
                </ul>

              </div>
            </div>


            <div className="reviewsec" id="reviewsec">
              <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

                  <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
                    {SingleData && SingleData?.reviews.map((item, index) => (
                      <div key={index} className="gap-3 pb-6 pt-6 sm:flex sm:items-start">
                        <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                          <div className="flex items-center gap-0.5 w-10 bg-green">
                            <svg className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>

                            <p className="dark:text-white">{item.rating}</p>
                          </div>

                          <div className="space-y-0.5">
                            <h2 className="text-2xl font-bold dark:text-white">{item.reviewerName}</h2>
                            <p className="text-base font-semibold text-gray-900 dark:text-white">{item.comment}</p>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{item.date.slice(0, 10)}</p>
                            <p className="dark:text-white text-black">{item.reviewerEmail}</p>
                          </div>

                          <div className="inline-flex items-center gap-1">
                            <svg className="h-5 w-5 text-primary-700 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                fillRule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Verified purchase</p>
                          </div>
                        </div>

                        <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                          <p className="text-base font-normal text-gray-500 dark:text-gray-400">My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I’m very happy with this purchase.</p>

                          <div className="flex items-center gap-4">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
                            <div className="flex items-center">
                              <input id="reviews-radio-1" type="radio" value="" name="reviews-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" onClick={() => { setAddReviewCount(prev => prev + 1) }} />
                              <label htmlFor="reviews-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: {addReviewCount} </label>
                            </div>
                            <div className="flex items-center">
                              <input id="reviews-radio-2" type="radio" value="" name="reviews-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" onClick={() => { setAddReviewCount(prev => prev > 1 ? prev - 1 : prev + 1) }} />
                              <label htmlFor="reviews-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: {addReviewCount} </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}


                  </div>

                  <div className="mt-6 text-center">
                    <button type="button" className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">View more reviews</button>
                  </div>
                </div>
              </section>

              {/* <!-- Add review modal --> */}
              <div id="review-modal" tabIndex="-1" aria-hidden="true" className={`fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased ${ViewRevModal ? "flex" : "hidden"}`} >
                <div className="relative max-h-full w-full max-w-2xl p-4">
                  {/* <!-- Modal content --> */}
                  <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Add a review for:</h3>
                        <a to="/" className="font-medium text-primary-700 hover:underline dark:text-white">{SingleData.title}</a>
                      </div>
                      <button type="button" onClick={() => setViewRevModal(false)} className="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="review-modal">
                        <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form className="p-4 md:p-5">
                      <div className="mb-4 grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <div className="flex items-center">
                            <svg className="h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="ms-2 h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="ms-2 h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">3.0 out of 5</span>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Review title</label>
                          <input type="text" name="title" id="title" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required="" />
                        </div>
                        <div className="col-span-2">
                          <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Review description</label>
                          <textarea id="description" rows="6" className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required=""></textarea>
                          <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">Problems with the product or delivery? <a to="/" className="text-primary-600 hover:underline dark:text-primary-500">Send a report</a>.</p>
                        </div>
                        <div className="col-span-2">
                          <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Add real photos of the product to help other customers <span className="text-gray-500 dark:text-gray-400">(Optional)</span></p>
                          <div className="flex w-full items-center justify-center">
                            <label htmlFor="dropzone-file" className="dark:hover:bg-bray-800 flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <svg className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="flex items-center">
                            <input id="review-checkbox" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                            <label htmlFor="review-checkbox" className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">By publishing this review you agree with the <a to="/" className="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>.</label>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                        <button type="submit" className="me-2 inline-flex items-center rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add review</button>
                        <button type="button" data-modal-toggle="review-modal" className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" onClick={() => setViewRevModal(false)} >Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      ) : (
        <p>404 / Page is not found</p>
      )}
    </>
  )
}
