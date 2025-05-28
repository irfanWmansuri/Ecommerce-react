import { NavLink } from "react-router-dom"
import { useState } from "react"
import TinyEditor from "../../component/Editor/AdvancedEditor";
import AddDiscount from "../../component/AddDiscount";

export function Add() {
   const [activeTab, setSActiveTab] = useState(0);

    const tabs = [
        { ProductTab: 'Product info' },
        { ProductTab: 'Product Data' },
        { ProductTab: 'Discount' },
        { ProductTab: 'Images' }
    ]
  return (
    <>
            <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold dark:text-white">Add Products</h2>
            </div>

            <div className="tabsec">
                <div className="tab_container">
                    <div className="tabnav border-b border-gray-700">
                        <ul className="flex items-center">
                            {tabs.map((tab, i) => (
                                <li key={i} onClick={() => { setSActiveTab(i) }}>
                                    <NavLink
                                        to=""
                                        role="tab"
                                        className={`py-2 px-6 block text-gray-300 text-sm focus:outline-none focus:ring-0  ${activeTab === i
                                            ? 'bg-gray-800 text-primary-500 border-t border-r border-l border-gray-700 -mb-px'
                                            : 'bg-gray-900'
                                            } rounded-t-md hover:text-primary-600 transition duration-200`}
                                    >
                                        {tab.ProductTab}
                                    </NavLink>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tab_content">
                        {tabs.map((_, i) => (
                            <div key={i} id={`tab-${i}`} className={`tab_panel transition-opacity duration-300 ease-in-out ${activeTab === i ? 'block opacity-100' : 'hidden opacity-0'} bg-gray-800 py-6 px-6 text-gray-400 border-b border-l border-r border-gray-700`}>
                                {i === 0 && (
                                    <form action="noaction">
                                        <div className="namebox mb-4 flex">
                                            <label className="text-md font-medium w-[200px] inline-block">Name:</label>
                                            <input type="text" placeholder="Product name" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="pricebox mb-4 flex">
                                            <label className="text-md font-medium w-[200px] inline-block">Price:</label>
                                            <input type="text" placeholder="&#8377;160.00" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="descriptionbox mb-4 flex">
                                            <label className="text-md font-medium w-[200px] inline-block">Description:</label>
                                            <div className="textbox w-4/5"><TinyEditor /></div>         
                                        </div>
                                    </form>
                                )}

                                {i === 1 && (

                                    <form action="noaction" className="space-y-4">
                                        <div className="namebox">
                                            <label className="text-md font-medium w-1/6 inline-block">ID:</label>
                                            <input type="text" placeholder="143" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="pricebox">
                                            <label className="text-md font-medium w-1/6 inline-block">Model:</label>
                                            <input type="text" placeholder="Model name" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="categorybox">
                                            <label className="text-md font-medium w-1/6 inline-block">Category:</label>
                                            <select name="tax" id="tax" className="focus-within:border-primary-600 placeholder-gray-500 text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">
                                                <option value="Accessories" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">Accessories</option>
                                                <option value="groceries" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">groceries</option>
                                                <option value="Home-decoration" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">Home-decoration</option>
                                                <option value="kitchen-accessories" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">kitchen-accessories</option>
                                                <option value="Electronics" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">Electronics</option>
                                            </select>
                                        </div>
                                        <div className="locationbox">
                                            <label className="text-md font-medium w-1/6 inline-block">Location:</label>
                                            <input type="text" placeholder="location" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="taxbox">
                                            <label className="text-md font-medium w-1/6 inline-block">Tax Class:</label>
                                            <select name="tax" id="tax" className="focus-within:border-primary-600 placeholder-gray-500 text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">
                                                <option value="CGST" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">CGST</option>
                                                <option value="SGST" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">SGST</option>
                                            </select>
                                        </div>
                                        <div className="quntitybox">
                                            <label className="text-md font-medium w-1/6 inline-block">Quantity:</label>
                                            <input type="text" placeholder="Quantity" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="mniquntitybox">
                                            <label className="text-md font-medium w-1/6 inline-block">Minimum Quantity:</label>
                                            <input type="text" placeholder="2" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="sortbox">
                                            <label className="text-md font-medium w-1/6 inline-block">Sort Order:</label>
                                            <input type="text" placeholder="0" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5" />
                                        </div>
                                        <div className="optionbox">
                                            <label className="text-md font-medium w-1/6 inline-block">Status:</label>
                                            <select name="tax" id="tax" className="focus-within:border-primary-600 placeholder-gray-500 text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">
                                                <option value="In-Stock" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">In-Stock</option>
                                                <option value="Out-of-Stock" className="focus-within:border-primary-600 placeholder-gray-500 placeholder:text-sm  outline-none border px-3 py-1 border-gray-700 bg-transparent w-4/5">Out-of-Stock</option>
                                            </select>
                                        </div>
                                        
                                    </form>

                                )}
                                {i === 2 && (
                                    <AddDiscount />
                                )}
                                {i === 3 && (
                                    <div>Images upload</div>
                                )}
                            </div>

                        ))}
                    </div>
                </div>
            </div>
    </>
  )
}
