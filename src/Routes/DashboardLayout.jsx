import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react';
import { LeftArrowIcon, HomeIcon, OrderIcon, ProductsIcon, CustomersIcon, ReportsIcon, DashMenuIcon } from '../utils/Icons';

export const NavLinks = [
  { title: 'Dashboard', link: '/dashboard', icon: HomeIcon },
  { title: 'Orders', link: '/orders', icon: OrderIcon },
  {
    title: 'Products',
    link: '/products',
    icon: ProductsIcon,
    child: [
      { title: 'Add', link: '/products/add' },
      { title: 'Edit', link: '/products/edit' },
    ],
  },
  { title: 'Customers', link: '/customers', icon: CustomersIcon},
  { title: 'Reports', link: '/reports', icon: ReportsIcon}
]
export const DashboardLayout = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu= ()=> {
    setOpenMenu(!openMenu)
  }

  const handleNavChild = (index) => {
    setOpenSubmenu(prev => prev === index ? null : index);
  }


  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm py-4 pl-4 relative">
        <div onClick={handleMenu} className={`menuiconbox absolute -right-5 top-2 text-white bg-gray-900 rounded-sm px-1 cursor-pointer border-2 border-gray-800 transform ${openMenu ? 'rotate-180' : 'rotate-0'}`}>
          <DashMenuIcon />
        </div>
        <div className="sidenav overflow-hidden">
          <h1 className="text-xl font-bold mb-6 dark:text-white">DashUI</h1>
          <nav>
            <ul className="space-y-2">
              { NavLinks.map((nav, index) =>
              (<li key={index} className='relative'>
                <div onClick={() => Array.isArray(nav.child) && handleNavChild(index)}>
                  <NavLink to={nav.link} className={({ isActive }) => `flex items-center justify-between p-2 text-gray-600  dark:text-gray-400 transition duration-300 ease-in-out ${isActive ? 'dark:bg-gray-900 bg-gray-100 font-bold' : 'dark:bg-gray-800'} ${openSubmenu ? 'rounded-tl-md' : 'rounded-l-md'}`}>
                    <div className="title flex items-center gap-1">
                      {nav.icon ? <nav.icon /> : null}
                      {nav.title}
                    </div>
                    <div className={`transition-transform duration-300 ${openSubmenu ? '-rotate-90' : 'rotate-0'}`}>
                      {Array.isArray(nav.child) ? <LeftArrowIcon /> : null}
                    </div>
                  </NavLink>
                </div>

                {Array.isArray(nav.child) && nav.child.length > 0 && (
                  <ul className={`pl-2 transform transition-all duration-300 ${openSubmenu === index ? 'max-h-[60px] visible' : 'max-h-[0] invisible'} origin-top`}>
                    {nav.child.map((child, i) => (
                      <li key={i} className={`l-6 relative transition-all duration-300 delay-${i * 100} before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300 dark:before:bg-gray-600 before:shadow-md`}
                      >
                        <NavLink to={child.link} className={({ isActive }) => `block py-1 pl-6 text-sm rounded-md transition-colors duration-300 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 ${isActive ? 'font-semibold text-primary-700 dark:text-primary-500' : ''}`}>
                          {child.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-14 w-3/4">
        {/* Header */}
        <Outlet />
      </main>
    </div>
  );
};


