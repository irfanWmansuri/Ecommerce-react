import { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import axios from "axios";

export default function ProductDataTable() {
  const { userProducts } = useContext(CartContext);
  const tableRef = useRef();
  const [tableData, setTableData] = useState([]);

  function generateDateFromId(id, maxDaysAgo = 30) {
    const today = new Date();
    const daysAgo = id % maxDaysAgo;
    const generatedDate = new Date(today);
    generatedDate.setDate(today.getDate() - daysAgo);

    return generatedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }


  useEffect(() => {
    const fetchTableData = async () => {
  try {
    const response = await axios("https://dummyjson.com/products");
    const products = response.data.products;

    const apiProducts = products.map((product) => ({
      productId: product.id,
      productTitle: product.title,
      productCategory: product.category,
      productAddedDate: generateDateFromId(product.id),
      productPrice: `₹ ${product.price.toFixed(2)}`,
      productQuantity: product.stock,
      productStatus: product.quantity > 5 ? "Active" : "Deactive",
      productThumbnail: product.thumbnail,
      productRating: product.rating,
      productSlug: product.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""),
      productDescription:product.description
    }));

    const localProducts = userProducts.map((product) => ({
      productId: product.id,
      productTitle: product.title,
      productCategory: product.category || "custom",
      productAddedDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      productPrice: `₹ ${parseFloat(product.price).toFixed(2)}`,
      productQuantity: product.stock || product.quantity || 0,
      productStatus: product.quantity > 5 ? "Active" : "Deactive",
      productThumbnail: product.thumbnail,
      productRating: product.rating || 5,
      productSlug: product.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""),
      productDescription:product.description
    }));

    const combinedProducts = [...localProducts, ...apiProducts];

    setTableData(combinedProducts);
    console.log("Final table data after combining:", combinedProducts);
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

    fetchTableData();
  }, []);

  

  useEffect(() => {
    if (tableData.length > 0) {
      const table = $(tableRef.current).DataTable({
        responsive: true,
        paging: true,
        searching: true,
        info: true,
        lengthChange: true,
        lengthMenu: [5, 10, 25, 50],
        pageLength: 10,
        data: tableData,
        columns: [
          {
            title: "",
            data: "productThumbnail",
            render: (data, type, row) =>
              `<a href='/product/slug/${row.productSlug}'><img src="${data}" class="w-16 h-16 rounded object-cover" /></a>`,
            orderable: false,
          },
          {
            title: "Product",
            data: "productTitle",
            render: (data, type, row) =>
              `<div>
                  <a href="/product/slug/${row.productSlug}" class="font-semibold text-gray-400 text-sm block hover:text-primary-600">${data}</a>
                  <div class="text-white-400 text-xs inline-block bg-gray-900 rounded px-1 py-[4px] mt-1 border border-gray-700">⭐ ${row.productRating.toFixed(1)}</div>
               </div>`,
          },
          { title: "Category", data: "productCategory" },
          { title: "Added Date", data: "productAddedDate" },
          { title: "Price", data: "productPrice" },
          { title: "Quantity", data: "productQuantity" },
          {
            title: "Status",
            data: "productStatus",
            render: (data) =>
              `<span class="px-2 py-1 rounded text-xs font-medium ${data === "Active"
                ? "bg-[#1E333E] text-green-600"
                : "bg-[#312A3C] text-red-600"
              }">${data}</span>`,
          },
          
          {
            title: "Action",
            data: null,
            render: () =>
              `<div class="flex gap-2 justify-center">
                <Tooltip><button title="View" class="grid place-content-center hover:bg-gray-700 w-8 h-8 text-gray-600 hover:text-gray-300 px-2 py-1 rounded-full text-xs transition-all"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z" /></svg></button></Tooltip>
                <Tooltip><button title="Edit" class="grid place-content-center hover:bg-gray-700 w-8 h-8 text-gray-600 hover:text-gray-300 px-2 py-1 rounded-full text-xs transition-all"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-30.11 21-51.56Q186-817 216-816h346l-72 72H216v528h528v-274l72-72v346q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm264-336Zm-96 96v-153l354-354q11-11 24-16t26.5-5q14.4 0 27.45 5 13.05 5 23.99 15.78L891-840q11 11 16 24.18t5 26.82q0 13.66-5.02 26.87-5.02 13.2-15.98 24.13L537-384H384Zm456-405-51-51 51 51ZM456-456h51l231-231-25-26-26-25-231 231v51Zm257-257-26-25 26 25 25 26-25-26Z" /></svg></button></Tooltip>
                <Tooltip><button title="Delete" class="grid place-content-center hover:bg-gray-700 w-8 h-8 text-gray-600 hover:text-gray-300 px-2 py-1 rounded-full text-xs transition-all"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="CurrentColor"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg></button></Tooltip>
               </div>`,
            orderable: false,
            searchable: false,
          },
        ],
        
        createdRow: function (row, data, dataIndex) {
          $(row).addClass("bg-gray-800 text-gray-400 border-b border-slate-700");
        },
        drawCallback: function () {
          $(".dataTables_wrapper").addClass("text-gray-400");
          $("table.dataTable thead").addClass("bg-gray-700 text-gray-300 text-sm");
          $("table.dataTable thead th").addClass("py-4 text-left");
          $("table.dataTable td").addClass("text-sm");
          $("table.dataTable").removeClass("stripe hover").addClass("w-full");
          $(".dataTables_length select").addClass(
            "bg-slate-700 text-gray-400 border-none rounded px-2 py-1 text-sm"
          );
          $(".dataTables_filter input").addClass(
            "bg-slate-700 text-gray-400 border-none rounded px-2 py-1 ml-2 text-sm"
          );
          $(".dataTables_paginate .paginate_button").addClass(
            "bg-slate-700 text-gray-400 rounded px-3 py-1 mx-1 text-sm"
          );
          $(".dataTables_info").addClass("text-sm text-slate-300 mt-2 text-sm");
        },
      });

      return () => {
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
          table.destroy();
        }
      };
    }
  }, [tableData]);


  return (
    <div className="bg-gray-800 min-h-screen text-gray-500 rounded">
      <div className="flex justify-between items-center mb-4 p-4 border-b border-gray-700 ">
        <NavLink to='/products/add-product' className="bg-primary-600 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-primary-700">+ Add Product</NavLink>
        <div className="space-x-2">
          <button className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-sm text-white transition-text duration-200">
            Import
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-sm text-white transition-text duration-200">
            Export
          </button>
        </div>
      </div>
      <table
        ref={tableRef}
        className="display data-table overflow-hidden w-full"
      ></table>
    </div>
  );
}
