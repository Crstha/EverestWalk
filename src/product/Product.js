import React from "react";
import "./Product.scss";

function Product({
  title,
  image,
  price,
  rating,
  stock,
  createddate,
  category,
}) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p>{category}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <p>{createddate}</p>

      <p>{stock}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default Product;
