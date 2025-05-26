import { NavLink } from 'react-router-dom';
import { CustomerIcon } from '../utils/Icons';

export const RecentOrders = [
    {orderId : '#DU0001', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' },
    {orderId : '#DU0002', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' },
    {orderId : '#DU0003', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' },
    {orderId : '#DU0004', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' },
    {orderId : '#DU0005', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' },
    {orderId : '#DU0006', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' },
    {orderId : '#DU0007', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' },
    {orderId : '#DU0008', customer:'Michell Forge', cutomerImg: CustomerIcon, product:'Headphone', amount:'99', vendor:'DollarSmart', Status:'Paid' }
] 
 

export default function RecentOrderTable() {
    return (
        <>
            <div className="recentordersec w-2/4 rounded-xl text-white bg-gray-800 pb-3">
                <h2 className="text-md text-slate-300 font-medium p-4">Recent orders</h2>
                    <div className="card-body">
                  <div className="table-responsive table-card overflow-x-auto">
                    <table className="table text-nowrap mb-0 table-centered overflow-x-auto">
                      <thead className="table-light bg-[#334155]">
                        <tr>
                          <th className='p-2 text-sm text-slate-300'>Order ID</th>
                          <th className='p-2 text-sm text-slate-300'>Customer</th>
                          <th className='p-2 text-sm text-slate-300'>Product</th>
                          <th className='p-2 text-sm text-slate-300'>Amount</th>
                          <th className='p-2 text-sm text-slate-300'>Vendor</th>
                          <th className='p-2 text-sm text-slate-300'>Status</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-[#334155]'>
                        {RecentOrders.map((c, i)=> (
                            <tr key={i} className=''>
                          <td className='text-sm text-slate-400 font-medium px-4 py-3'><NavLink to="#" className='text-[#8b5cf6]'>{c.orderId}</NavLink></td>
                          <td className='text-sm text-slate-400 font-medium px-4 py-3'><NavLink to="#" className="text-inherit flex gap-1 items-center">
                              <div className='cutomerimg avatar-xs avatar rounded-circle me-1' alt="cutomerImg">{<c.cutomerImg/>}</div>
                              <span>{c.customer}</span>
                            </NavLink></td>
                          <td className='text-sm text-slate-400 font-medium px-4 py-3'>{c.product}</td>
                          <td className="text-success text-sm font-medium px-4 py-3 text-green-600">${c.amount}</td>
                          <td className='text-sm text-slate-400 font-medium px-4 py-3'>{c.vendor}</td>
                          <td className='text-xs text-slate-400 font-medium px-4 py-3'><span className="badge badge-success text-green-500 bg-[#1E333E] py-1 px-2 rounded-lg">{c.Status}</span></td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
        </>
    )
}
