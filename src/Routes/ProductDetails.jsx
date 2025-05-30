import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { slug } = useParams();
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios("https://dummyjson.com/products");
        const products = response.data.products;

        // Find product matching the slug
        const product = products.find(
          (product) =>
            product.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "") === slug
        );

        // console.log(product);

        if (product) {
          setSingleData(product);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchSingleProduct();
  }, [slug]);

  if (!singleData) {
    return <div className="text-white p-4">Loading product details...</div>;
  }

  return (
    <div className="p-4 text-white bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">{singleData.title}</h1>
      <img src={singleData.thumbnail} alt={singleData.title} className="w-48 rounded mb-4" />
      <p><strong>Category:</strong> {singleData.category}</p>
      <p><strong>Price:</strong> ₹{singleData.price.toFixed(2)}</p>
      <p><strong>Description:</strong> {singleData.description}</p>
      <p><strong>Rating:</strong> ⭐ {singleData.rating}</p>
      <p><strong>Stock:</strong> {singleData.stock}</p>
    </div>
  );
}
