import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

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

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => category === "all" || product.category === category);

  let sortedProducts = [...filteredProducts];

  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-2">
          <select
            className="form-select mb-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {products.map((product) => (
              <option key={product.id} value={product.category}>
                {product.category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <select
            className="form-select mb-4"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort by Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="row">
        {sortedProducts?.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <div
                style={{
                  height: "300px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
              </div>
              {/* <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  {" "}
                  View Details
                </Link>
              </div> */}
              <div className="card-body">
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                  <button className="btn btn-primary">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
