import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <section id="menu">
      <div className="menu-container">
        <h1>Our Signature Menu</h1>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>Classic Lagos Jollof</h3>
            <p className="description">
              Traditional smoky jollof rice with bell peppers and Nigerian
              spices
            </p>
            <p className="price">₦3,500</p>
          </div>
          <div className="menu-item">
            <h3>Seafood Jollof Special</h3>
            <p className="description">
              Jollof rice topped with grilled shrimp, fish, and special sauce
            </p>
            <p className="price">₦5,500</p>
          </div>
          <div className="menu-item">
            <h3>Chicken Suya Jollof</h3>
            <p className="description">
              Spicy jollof rice with suya-spiced grilled chicken
            </p>
            <p className="price">₦4,500</p>
          </div>
          <div className="menu-item">
            <h3>Vegetarian Delight</h3>
            <p className="description">
              Jollof rice with grilled vegetables and plantains
            </p>
            <p className="price">₦3,000</p>
          </div>
          <div className="menu-item">
            <h3>Goat Meat Festival</h3>
            <p className="description">
              Rich jollof rice served with tender spiced goat meat
            </p>
            <p className="price">₦5,000</p>
          </div>
          <div className="menu-item">
            <h3>Coconut Jollof Fusion</h3>
            <p className="description">
              Coconut-infused jollof rice with grilled tiger prawns
            </p>
            <p className="price">₦6,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
