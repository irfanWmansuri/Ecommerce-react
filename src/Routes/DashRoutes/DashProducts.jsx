import { NavLink } from "react-router-dom"
import ProductDataTable from "../../component/DatatableDash/ProductDataTable";

export function DashProducts() {

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold dark:text-white">Products</h2>
            </div>

            <ProductDataTable />
        </>
    )
}
