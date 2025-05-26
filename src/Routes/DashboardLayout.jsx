import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { LeftArrowIcon, HomeIcon, OrderIcon, ProductsIcon, CustomersIcon, ReportsIcon, DashMenuIcon } from '../utils/Icons';
import Tooltip from '../utils/Tooltip';

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
  { title: 'Customers', link: '/customers', icon: CustomersIcon },
  { title: 'Reports', link: '/reports', icon: ReportsIcon }
];

export const DashboardLayout = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavChild = (index) => {
    setOpenSubmenu(prev => prev === index ? null : index);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">
      {/* Sidebar */}
      <aside className={`${openMenu ? 'w-14' : 'w-56'} bg-white dark:bg-gray-800 shadow-sm py-4 pl-4 relative transition-all duration-300`}>
        {/* Toggle Sidebar */}
        <div onClick={handleMenu} className={`menuiconbox absolute -right-5 top-3 text-white bg-gray-900 rounded-sm px-1 cursor-pointer border-2 border-gray-800 transform ${openMenu ? 'rotate-180' : 'rotate-0'}`}>
          <DashMenuIcon />
        </div>

        <div className="sidenav">
          <h1 className="text-xl font-bold mb-6 dark:text-white transition-all duration-300">{openMenu ? 'D' : 'DashUI'}</h1>
          <nav>
            <ul className="space-y-2">
              {NavLinks.map((nav, index) => (
                <li key={index} className="relative group">
                  <div onClick={() => !openMenu && Array.isArray(nav.child) && handleNavChild(index)}>
                    <NavLink to={nav.link} className={({ isActive }) =>
                      `flex items-center justify-between p-2 text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out rounded-l-md
                      ${isActive ? 'dark:bg-gray-900 bg-gray-100 font-bold' : 'dark:bg-gray-800'} 
                      ${openMenu ? 'justify-center' : ''}`
                    }>
                      {openMenu ? (
                        <Tooltip text={nav.title}>
                          <div className="flex justify-center">{nav.icon && <nav.icon />}</div>
                        </Tooltip>
                      ) : (
                        <>
                          <div className="title flex items-center gap-2">
                            {nav.icon && <nav.icon />}
                            {nav.title}
                          </div>
                          {Array.isArray(nav.child) && (
                            <span className={`transition-transform duration-300 ${openSubmenu === index ? '-rotate-90' : 'rotate-0'}`}>
                              <LeftArrowIcon />
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </div>

                  {/* SUBMENU */}
                  {Array.isArray(nav.child) && (
                    <>
                      {/* Expanded mode: show/hide submenu on click */}
                      {!openMenu && openSubmenu === index && (
                        <ul className="pl-8 mt-1 space-y-1 transition-all">
                          {nav.child.map((child, i) => (
                            <li key={i} className='list-disc text-gray-600'>
                              <NavLink to={child.link} className={({ isActive }) =>
                                `block text-sm rounded-md py-1 transition-colors duration-300 
                                text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 
                                ${isActive ? 'font-semibold text-primary-700 dark:text-primary-500' : ''}`}
                              >
                                {child.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Collapsed mode: show submenu on hover to the right */}
                      {openMenu && (
                        <div className="absolute left-full top-0 z-50 hidden group-hover:block">
                          <div className="bg-white dark:bg-gray-900 shadow-md w-40">
                            {nav.child.map((child, i) => (
                              <NavLink key={i} to={child.link} className={({ isActive }) =>
                                `block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 
                                ${isActive ? 'font-semibold text-primary-700 dark:text-primary-400' : ''}`}>
                                {child.title}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-14 w-3/4">
        <Outlet />
      </main>
    </div>
  );
};
