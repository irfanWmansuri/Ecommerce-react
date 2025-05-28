import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import axios from "axios";
// import "datatables.net-dt/css/jquery.dataTables.css"; 
import { VisibilityIcon } from "../../utils/Icons";



export default function ProductDataTable() {
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
        const Productdata = products.map((product) => ({
          productTitle: product.title,
          productCategory: product.category,
          productAddedDate: generateDateFromId(product.id),
          productPrice: `$${product.price.toFixed(2)}`,
          productQuantity: product.stock,
          productStatus: product.stock > 5 ? "Active" : "Deactive",
          productThumbnail: product.thumbnail,
          productRating: product.rating,
        }));
        setTableData(Productdata);
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
            render: (data) =>
              `<img src="${data}" class="w-16 h-16 rounded object-cover" />`,
            orderable: false,
          },
          {
            title: "Product",
            data: "productTitle",
            render: (data, type, row) =>
              `<div>
                  <div class="font-semibold text-gray-400 text-sm">${data}</div>
                  <div class="text-yellow-400 text-sm">⭐ ${row.productRating}</div>
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
              `<span class="px-2 py-1 rounded text-xs font-medium ${
                data === "Active"
                  ? "bg-[#1E333E] text-green-600"
                  : "bg-[#312A3C] text-red-600 "
              }">${data}</span>`,
          },
          {
            title: "Action",
            data: null,
            render: () =>
              `<div class="flex gap-2 justify-center">
                <button class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"><VisibilityIcon /></button>
                <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs">✏️</button>
                <button class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs">🗑️</button>
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
        <NavLink to='/products/add' className="bg-primary-600 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-primary-700">+ Add Product</NavLink>
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
