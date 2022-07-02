import React from "react";
import Product from "../product/Product";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://fantechworld.com/wp-content/uploads/2022/03/MINT-EDITION_home_bnr-1536x864.jpg"
          alt=""
        ></img>
        <div className="home_row">
          {/* Product */}
          <Product
            id="1"
            title="Fantech Keyboard Pink"
            price={50.99}
            image="https://fantechworld.com/wp-content/uploads/2020/10/MK852_pink_icon_758x455px-1-500x300.png"
            rating={4}
            createddate={"20 / 05 / 2000"}
            stock="Out of Stock"
            category="Headphone"
          ></Product>
          <Product
            id="1"
            title="Fantech Keyboard Black"
            price={50.99}
            image="https://fantechworld.com/wp-content/uploads/2020/10/MK884_black_icon_758x455px-1-500x300.png"
            rating={4}
            createddate={"20 / 05 / 2000"}
            stock="Out of Stock"
            category="Headphone"
          ></Product>

          {/* Product */}
        </div>
        <div className="home_row">
          {/* Product */}
          <Product
            id="1"
            title="Fantech Best Keyboard"
            price={50.99}
            image="https://fantechworld.com/wp-content/uploads/2020/10/MK852_pink_icon_758x455px-1-500x300.png"
            rating={4}
            createddate={"20 / 05 / 2000"}
            stock="Out of Stock"
            category="Headphone"
          ></Product>
          <Product
            id="1"
            title="Fantech Best Keyboard"
            price={50.99}
            image="https://fantechworld.com/wp-content/uploads/2020/10/MK884_black_icon_758x455px-1-500x300.png"
            rating={4}
            createddate={"20 / 05 / 2000"}
            stock="Out of Stock"
            category="Headphone"
          ></Product>
          <Product
            id="1"
            title="Fantech Best Keyboard "
            price={50.99}
            image="https://fantechworld.com/wp-content/uploads/2020/10/MK884_black_icon_758x455px-1-500x300.png"
            rating={4}
            createddate={"20 / 05 / 2000"}
            stock="Out of Stock"
            category="Headphone"
          ></Product>

          {/* Product */}
        </div>{" "}
        <div className="home_row">
          {/* Product */}
          <Product
            id="1"
            title="Fantech Best Keyboard"
            price={50.99}
            image="https://fantechworld.com/wp-content/uploads/2020/10/MK884_black_icon_758x455px-1-500x300.png"
            rating={4}
            createddate={"20 / 05 / 2000"}
            stock="Out of Stock"
            category="Headphone"
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
