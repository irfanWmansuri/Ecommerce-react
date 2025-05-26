import { NavLink } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../context/CartContext";
import ModalPoppup from "./modal/ModalPoppup";
import { LoginPage } from "../Routes/LoginPage";
import { RegisterPage } from "../Routes/RegisterPage";
// import { OfferPopup } from "./component/OfferPopup";

export function Header() {
    const { cartList, isLoggined, handleLoginPoppup, handleLogout, showModal, showLogin, setShowLogin } = useContext(CartContext);

    const [cartOpen, setCartOpen] = useState(false);
    const [accToggle, setAccToggle] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(false);

    const userFirstName = localStorage.getItem('firstName');
    const userImage = localStorage.getItem('userImage'); 

    const userButton = () => {
        return (
            isLoggined ?  (

                <button id="userDropdownButton1" onClick={accountToggle} data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center gap-1 rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                    <span><img src={userImage} width={30} height={30} alt="userimage" /></span>
                    {userFirstName}
                </button>

            ) : (

                <button onClick={handleLoginPoppup} type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                    <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    login / Register
                </button>

            )
        )
    }

    const cartToggle = () => {
        setCartOpen(!cartOpen)
    }

    const accountToggle = () => {
        setAccToggle(!accToggle)
    }


    useEffect(() => {
        const totalItemCount = cartList.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setCartItemCount(totalItemCount);
        // console.log(totalItemCount)
    }, [cartList]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // CART
            const cartButton = document.getElementById("myCartDropdownButton1");
            const cartDropdown = document.getElementById("myCartDropdown1");

            if (
                cartOpen &&
                cartDropdown &&
                !cartDropdown.contains(event.target) &&
                cartButton &&
                !cartButton.contains(event.target)
            ) {
                setCartOpen(false);
            }

            // ACCOUNT
            const accButton = document.getElementById("userDropdownButton1");
            const accDropdown = document.getElementById("userDropdown1");

            if (
                accToggle &&
                accDropdown &&
                !accDropdown.contains(event.target) &&
                accButton &&
                !accButton.contains(event.target)
            ) {
                setAccToggle(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [cartOpen, accToggle]);



    return (
        <>
            {/* <OfferPopup /> */}
            <nav className="bg-white dark:bg-gray-800 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center space-x-8">
                            <div className="shrink-0">
                                <NavLink to="/">
                                    <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="" />
                                    <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
                                </NavLink>
                            </div>

                            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                                <li>
                                    <NavLink to="/" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="shrink-0">
                                    <NavLink to="/" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Best Sellers
                                    </NavLink>
                                </li>
                                <li className="shrink-0">
                                    <NavLink to="/" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Gift Ideas
                                    </NavLink>
                                </li>
                                <li className="shrink-0">
                                    <NavLink to="/" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Today's Deals
                                    </NavLink>
                                </li>
                                <li className="shrink-0">
                                    <NavLink to="/" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Sell
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center lg:space-x-2">

                            <div className="carttogglesec relative">
                                <button id="myCartDropdownButton1" onClick={cartToggle} data-dropdown-toggle="myCartDropdown1" type="button" className="relative inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                                    <span className="sr-only">
                                        Cart
                                    </span>
                                    <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                    </svg>
                                    <span className="hidden sm:flex">My Cart</span>
                                    <span className="cartcount absolute left-[-8px] top-[-2px] bg-[#1D4ED8] w-2 h-2 p-2.5 flex items-center justify-center rounded-full text-white text-[10px]">{cartItemCount}</span>
                                    <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </button>

                                <div id="myCartDropdown1" className={`z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 absolute top-[60px] right-[-100px] w-96 ${cartOpen ? "block" : "hidden"}`}>
                                    <Cart />
                                </div>
                            </div>

                            <div className="userdropsec relative">
                                {userButton()}

                                <div id="userDropdown1" className={`z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 absolute top-[60px] right-[-50px] ${accToggle ? "add" : "hidden"}`}>
                                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                                        <li><NavLink to="/my-account" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </NavLink></li>
                                    </ul>

                                    <div className="p-2 text-sm font-medium text-gray-900 dark:text-red-500">
                                        <NavLink to='' onClick={handleLogout} className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </NavLink>
                                    </div>
                                </div>
                            </div>

                            <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
                                <span className="sr-only">
                                    Open Menu
                                </span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div id="ecommerce-navbar-menu-1" className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
                        <ul className="text-gray-900  text-sm font-medium dark:text-white space-y-3">
                            <li>
                                <NavLink to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Games</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Electronics</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {
                showModal && (
                    <ModalPoppup customClass="loginpopup">
                        <div className="modalwrap">
                            <div className="loginwrap" style={{ transform: showLogin ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
                                <LoginPage />
                                <RegisterPage />
                            </div>
                        </div>
                    </ModalPoppup>
                )
            }
        </>
    )
}
