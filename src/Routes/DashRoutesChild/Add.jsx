import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AddDiscount from "../../component/AddDiscount";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

export function Add() {
    const { addProduct } = useContext(CartContext);
    const [activeTab, setActiveTab] = useState(0);
    const [form, setForm] = useState({
        thumbnail: "",
        title: "",
        discount: "",
        rating: "",
        category: "",
        price: "",
        discountPrice: "",
        description: "",
        status: "",
        model: "",
        location: "",
        taxClass: "",
        quantity: "0",
        minQuantity: "1",
        sortOrder: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Basic validation
        if (!form.title || !form.price || !form.description) {
            toast.error("Please fill out required fields.");
            return;
        }

        const newProduct = {
            id: Date.now(),
            title: form.title,
            price: form.price,
            thumbnail: form.thumbnail,
            discountPercentage: form.discountPrice,
            description: form.description,
            category: form.category,
            status: form.status,
            model: form.model,
            location: form.location,
            taxClass: form.taxClass,
            quantity: parseInt(form.quantity, 10) || 0,
            minQuantity: parseInt(form.minQuantity, 10) || 1,
            sortOrder: form.sortOrder,
        };

        addProduct(newProduct);
        toast.success("Product added successfully");
        navigate("/products");

      
    };

    const tabs = [
        { ProductTab: "Product info" },
        { ProductTab: "Product Data" },
        { ProductTab: "Discount" },
        { ProductTab: "Images" },
    ];

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
                                <li key={i} onClick={() => setActiveTab(i)}>
                                    <NavLink
                                        to=""
                                        role="tab"
                                        className={`py-2 px-6 block text-gray-300 text-sm focus:outline-none focus:ring-0 ${activeTab === i
                                            ? "bg-gray-800 text-primary-500 border-t border-r border-l border-gray-700 -mb-px"
                                            : "bg-gray-900"
                                            } rounded-t-md hover:text-primary-600 transition duration-200`}
                                    >
                                        {tab.ProductTab}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="tab_content">
                            {tabs.map((_, i) => (
                                <div
                                    key={i}
                                    id={`tab-${i}`}
                                    className={`tab_panel transition-opacity duration-300 ease-in-out ${activeTab === i ? "block opacity-100" : "hidden opacity-0"
                                        } bg-gray-800 py-6 px-6 text-gray-400 border-b border-l border-r border-gray-700`}
                                >
                                    {i === 0 && (
                                        <>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Name:</label>
                                                <input
                                                    name="title"
                                                    value={form.title}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Product name"
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Price:</label>
                                                <input
                                                    name="price"
                                                    value={form.price}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="₹160.00"
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Description:</label>
                                                <div className="w-4/5">
                                                    <textarea
                                                        name="description"
                                                        style={{ direction: 'ltr' }}
                                                        value={form.description}
                                                        onChange={handleChange}
                                                        className=" w-full h-24 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 text-sm py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {i === 1 && (
                                        <>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Model:</label>
                                                <input
                                                    name="model"
                                                    value={form.model}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Model name"
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Category:</label>
                                                <select
                                                    name="category"
                                                    value={form.category}
                                                    onChange={handleChange}
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Accessories">Accessories</option>
                                                    <option value="Groceries">Groceries</option>
                                                    <option value="Home-decoration">Home-decoration</option>
                                                    <option value="Kitchen-accessories">Kitchen-accessories</option>
                                                    <option value="Electronics">Electronics</option>
                                                </select>
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Location:</label>
                                                <input
                                                    name="location"
                                                    value={form.location}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Location"
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Tax Class:</label>
                                                <select
                                                    name="taxClass"
                                                    value={form.taxClass}
                                                    onChange={handleChange}
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                >
                                                    <option value="CGST">CGST</option>
                                                    <option value="SGST">SGST</option>
                                                </select>
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Quantity:</label>
                                                <input
                                                    name="quantity"
                                                    value={form.quantity}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Quantity"
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Minimum Quantity:</label>
                                                <input
                                                    name="minQuantity"
                                                    value={form.minQuantity}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="2"
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Sort Order:</label>
                                                <input
                                                    name="sortOrder"
                                                    value={form.sortOrder}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="0"
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Status:</label>
                                                <select
                                                    name="status"
                                                    value={form.status}
                                                    onChange={handleChange}
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Deactive">Deactive</option>
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {i === 2 && <AddDiscount
                                        setDiscountPrice={(value) => setForm({ ...form, discountPrice: value })}
                                        discountPrice={form.discountPrice}
                                    />

                                    }

                                    {i === 3 && (
                                        <>
                                            <div className="mb-4 flex">
                                                <label className="text-md font-medium w-[200px] inline-block">Upload Image:</label>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        const file = e.target.files[0];
                                                        if (file) {
                                                            const reader = new FileReader();
                                                            reader.onloadend = () => {
                                                                setForm({ ...form, thumbnail: reader.result }); // Base64 image preview
                                                            };
                                                            reader.readAsDataURL(file);
                                                        }
                                                    }}
                                                    className="w-4/5 focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 py-1 px-3 transition-colors duration-150 ease-in-out focus:outline-none cursor-pointer"
                                                />
                                            </div>
                                            {form.thumbnail && (
                                                <div className="mb-4 flex">
                                                    <label className="text-md font-medium w-[200px] inline-block">Preview:</label>
                                                    <img
                                                        src={form.thumbnail}
                                                        alt="Preview"
                                                        className="w-40 h-40 object-cover border border-gray-700"
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}



                                </div>
                            ))}
                            <div className="bg-gray-900 border-t border-gray-700 p-6 text-right">
                                <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md">
                                    Create Product
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
