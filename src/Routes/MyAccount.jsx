import { useState, useEffect, use } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { EditIcon, EditSquareIcon, MoreIcon } from '../utils/Icons'

export function MyAccount() {
    const [singleUser, setSingleUser] = useState('')
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const handleSingleUserData = async () => {

            try {
                const singleUserData = await fetch(`https://dummyjson.com/users/${userId}`);
                const singleData = await singleUserData.json();
                setSingleUser(singleData);
            }
            catch (err) {
                console.error("Fetch failed:", err.message);
            }

        }
        handleSingleUserData();
    }, [userId])
    return (
        <>
            {
                singleUser ? (
                
                    <div className="myaccountwrap dark:bg-gray-900">
                        <div className="max-w-7xl mx-auto px-6 py-14">
                            <h2 className="text-2xl font-bold mb-6 dark:text-white">My Account</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                                <div>
                                    <div className="profilewrap bg-gray-800 rounded-lg p-4 space-y-4">
                                        <div className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 cursor-pointer text-white">
                                            <div className="imgbox relative"><img className="w-12 h-12 rounded-full" src={singleUser.image} alt="Profile" />
                                            <div className="editiconbox bg-white text-black rounded-full  absolute bottom-[-5px] right-[-5px] p-0.5">
                                                <EditIcon />
                                            </div>

                                            </div>
                                            <div>
                                                <div className="font-bold dark:text-white">{singleUser.firstName} {singleUser.lastName}</div>
                                                <div className="text-sm text-gray-400">{singleUser.username}</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-700">
                                            <button className="bg-blue-600 text-white py-2 rounded-lg text-sm">Profile</button>
                                            <button className="bg-purple-600 text-white py-2 rounded-lg text-sm">Gifts</button>
                                            <button className="bg-teal-600 text-white py-2 rounded-lg text-sm">Wallet</button>
                                        </div>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink to='' className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2 text-gray-300"><span>🛒</span> My orders</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='' className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2 text-gray-300"><span>⭐</span> Reviews</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='' className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2 text-gray-300"><span>📦</span> Delivery addresses</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='' className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2 text-gray-300"><span>👀</span> Recently viewed</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='' className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2 text-gray-300"><span>❤️</span> Favourite items</NavLink>
                                            </li>
                                            <li className='border-t border-gray-700'>
                                                <NavLink to='' className="mt-4 flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2 text-gray-300"><span>⚙️</span> Settings</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:col-span-3 space-y-6">

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                                            <div className="text-gray-400 text-sm">❤️ Favorite products</div>
                                            <div className="text-2xl font-bold dark:text-white">455</div>
                                        </div>
                                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                                            <div className="text-gray-400 text-sm">🛍 Total Orders</div>
                                            <div className="text-2xl font-bold dark:text-white">124</div>
                                        </div>
                                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                                            <div className="text-gray-400 text-sm">⭐ Reviews added</div>
                                            <div className="text-2xl font-bold dark:text-white">1,285</div>
                                        </div>
                                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                                            <div className="text-gray-400 text-sm">🔄 Product returns</div>
                                            <div className="text-2xl font-bold dark:text-white">2</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-800 rounded-lg p-6">
                                        <div className="md:col-span-2">
                                            <div className="space-y-4 text-sm text-gray-300">
                                                <div className='text-gray-400'><span className="font-medium text-lg text-white block">Email Address:</span> {singleUser.email}</div>
                                                <div className='text-gray-400'><span className="font-medium text-lg text-white block">Delivery Address:</span> {singleUser.address.address}, {singleUser.address.city}, {singleUser.address.stateCode} {singleUser.address.postalCode}, {singleUser.address.state}, {singleUser.address.country}.</div>
                                                <div className='text-gray-400'><span className="font-medium text-lg text-white block">Phone Number:</span> {singleUser.phone}</div>
                                                <div className='text-gray-400'><span className="font-medium text-lg text-white block">Country:</span> {singleUser.address.country}</div>
                                            </div>
                                            <div className="editbtn">
                                                <button className="mt-4 bg-blue-600 hover:bg-primary-800 text-white px-4 py-2 rounded-lg text-sm flex gap-2" ><EditSquareIcon /> Edit your data</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-8">
                                        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Latest orders</h3>
                                        <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:pb-5">
                                            <dl className="w-1/2 sm:w-48">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                    <Link to="#" className="hover:underline">#FWB12546798</Link>
                                                </dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">11.12.2023</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">$499</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                                                <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                                                    </svg>
                                                    In transit
                                                </dd>
                                            </dl>

                                            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                                                <button id="actionsMenuDropdownModal10" data-dropdown-toggle="dropdownOrderModal10" type="button" className="flex w-full items-center justify-center rounded-lg  bg-white p-1 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                                                    <MoreIcon />
                                                </button>
                                                <div id="dropdownOrderModal10" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(1073px, 847px)' }}>
                                                    <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown10">
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                                                                </svg>
                                                                <span>Order again</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                                                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                                                </svg>
                                                                Order details
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" data-modal-target="deleteOrderModal" data-modal-toggle="deleteOrderModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path>
                                                                </svg>
                                                                Cancel order
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 py-4 pb-4 dark:border-gray-700 md:py-5">
                                            <dl className="w-1/2 sm:w-48">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                    <Link to="#" className="hover:underline">#FWB12546777</Link>
                                                </dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">10.11.2024</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">$3,287</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                                                <dd className="mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"></path>
                                                    </svg>
                                                    Cancelled
                                                </dd>
                                            </dl>

                                            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                                                <button id="actionsMenuDropdownModal11" data-dropdown-toggle="dropdownOrderModal11" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                                                    <MoreIcon />
                                                </button>
                                                <div id="dropdownOrderModal11" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(1073px, 942px)' }}>
                                                    <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown11">
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                                                                </svg>
                                                                <span>Order again</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                                                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                                                </svg>
                                                                Order details
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 py-4 pb-4 dark:border-gray-700 md:py-5">
                                            <dl className="w-1/2 sm:w-48">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                    <Link to="#" className="hover:underline">#FWB12546846</Link>
                                                </dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">07.11.2024</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">$111</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                                                <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"></path>
                                                    </svg>
                                                    Completed
                                                </dd>
                                            </dl>

                                            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                                                <button id="actionsMenuDropdownModal12" data-dropdown-toggle="dropdownOrderModal12" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                                                    <MoreIcon />
                                                </button>
                                                <div id="dropdownOrderModal12" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(1073px, 1037px)' }}>
                                                    <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown12">
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                                                                </svg>
                                                                <span>Order again</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                                                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                                                </svg>
                                                                Order details
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-y-4 pt-4 md:pt-5">
                                            <dl className="w-1/2 sm:w-48">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                    <Link to="#" className="hover:underline">#FWB12546212</Link>
                                                </dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">18.10.2024</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">$756</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                                                <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"></path>
                                                    </svg>
                                                    Completed
                                                </dd>
                                            </dl>

                                            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                                                <button id="actionsMenuDropdownModal13" data-dropdown-toggle="dropdownOrderModal13" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                                                    <MoreIcon />
                                                </button>
                                                <div id="dropdownOrderModal13" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(1073px, 1132px)' }}>
                                                    <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown13">
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                                                                </svg>
                                                                <span>Order again</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                                                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                                                </svg>
                                                                Order details
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>404 / Page is not found</p>
                )
            }
        </>
    )
}
