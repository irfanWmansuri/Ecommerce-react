import { SalesIcon, OrdersIcon, CustomerIcon, RevenueIcon } from "../../utils/Icons"
import { NavLink } from "react-router-dom"
import SalesOverTimeChart from '../../component/Charts/chart'
import PieChart from '../../component/Charts/PieChart'
import RecentOrderTable from "../../component/RecentOrderTable"

export const dashSummary = [
    { title: 'Total Sales', icon: SalesIcon, total: '$24,000', btn: 'All Sales', arrow: '2.29%' },
    { title: 'Orders', icon: OrdersIcon, total: '1,200', btn: 'View Orders', arrow: '2.29%' },
    { title: 'Customers', icon: CustomerIcon, total: '750', btn: 'All Customers', arrow: '2.29%' },
    { title: 'Revenue', icon: RevenueIcon, total: '$10,000', btn: 'View Earnings', arrow: '2.29%' }
]

export default function Dashboard() {

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold dark:text-white">Dashboard</h2>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow hover:bg-primary-700">
                    Settings
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {dashSummary.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl transition-all duration-500 hover:-translate-y-2 shadow-md">
                        <div className="flex justify-between align-items-center">
                            <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                            <div className="iconbox"><item.icon /></div>
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <p className="text-2xl font-bold text-gray-800 dark:text-gray-300">{item.total}</p>
                            <span className="text-red-600 text-xs flex items-center "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>{item.arrow}</span>
                        </div>
                        <div className="viewbtn mt-2">
                            <NavLink className='text-primary-400 hover:text-primary-500'>{item.btn}</NavLink>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Orders Table */}
            <div className="">
                <div className="chartwrap flex gap-6">
                    <SalesOverTimeChart />
                    <PieChart />
                </div>
            </div>

            {/* Recent Order */}
            <div className="recentorderswrap flex gap-6 justify-between mt-6">
                <RecentOrderTable />
                <div className="bestsellersec w-1/2 rounded-xl text-white p-4 bg-gray-800">
                    <h2 class="text-sm text-slate-300 font-medium mb-4 pb-2 border-b-[1px]">Best seller</h2>
                </div>
            </div>
        </>
    )
}
