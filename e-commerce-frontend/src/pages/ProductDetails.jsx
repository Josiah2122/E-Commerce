import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Dummy product data (Replace this with API or state fetch)
  const products = [
    {
      id: 1,
      name: "All star",
      price: 1000,
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1561909848-977d0617f275?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Chair",
      price: 100,
      category: "furniture",
      image:
        "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Watch",
      price: 3000,
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mt-5">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
