import { useState } from "react"
import DatePicker from "react-datepicker"
import { CalenderIcon, TrashIcon } from '../utils/Icons'

export default function AddDiscount({ discountPrice, setDiscountPrice}) {
    const [sDate, setSdate] = useState(null);
    const [eDate, setEdate] = useState(null);

    const TableDiscount = [
        { Title: 'Group', },
        { Title: 'Discount' },
        { Title: 'Date start' },
        { Title: 'Date end' },
        { Title: 'Actions' },
    ]
    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="min-w-full text-sm text-left text-white border border-gray-700">
                    <thead className="bg-gray-800 border-b border-gray-700">
                        <tr>
                            {TableDiscount.map((title, index) => (
                                <th key={index} className="px-4 py-2 border-r border-gray-700 last:border-r-0">
                                    {title.Title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-700">
                            <td className="px-4 py-2 border-r border-gray-700">
                                <select className="form-select w-[90px] bg-gray-900 text-white border border-gray-700 text-sm py-1 px-2 focus-within:border-primary-600 transition-colors duration-150 ease-in-out focus:outline-none">
                                    <option>Group 1</option>
                                    <option>Group 2</option>
                                    <option>Group 3</option>
                                    <option>Group 4</option>
                                </select>
                            </td>
                            <td className="px-4 py-2 border-r border-gray-700">
                                <input value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} type="text" placeholder="10" className="w-full focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 text-sm py-1 px-2 transition-colors duration-150 ease-in-out focus:outline-none" />
                            </td>
       
                            <td className="px-4 py-2 border-r border-gray-700">
                                <div className="flex items-center gap-2">
                                    <CalenderIcon />
                                    <DatePicker
                                        selected={sDate}
                                        onChange={(date) => setSdate(date)}
                                        placeholderText="07/01/2025"
                                        className="w-full focus-within:border-primary-600 bg-gray-900 text-white border border-gray-700 text-sm py-1 px-2 transition-colors duration-150 ease-in-out focus:outline-none"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border-r border-gray-700">
                                <div className="flex items-center gap-2">
                                    <CalenderIcon />
                                    <DatePicker
                                        selected={eDate}
                                        onChange={(date) => setEdate(date)}
                                        placeholderText="07/01/2025"
                                        className="w-full focus:border-primary-600 bg-gray-900 text-white border border-gray-700 text-sm py-1 px-2 transition-colors duration-150 ease-in-out focus:outline-none"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <button className="text-red-400 hover:text-red-600 p-2 bg-gray-900 rounded-md">
                                    <TrashIcon />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
