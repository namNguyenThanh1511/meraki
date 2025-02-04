import React, { useState } from "react";
import "./index.scss";

const tabs = [
  { id: "description", label: "Description" },
  { id: "size-guide", label: "Size Guide" },
  { id: "shipping", label: "Shipping" },
  { id: "reviews", label: "Reviews" },
];

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-tabs">
      <div className="product-tabs__header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`product-tabs__tab ${
              activeTab === tab.id ? "product-tabs__tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="product-tabs__content">
        {activeTab === "description" && (
          <p className="product-tabs__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s...
          </p>
        )}
        {activeTab === "size-guide" && (
          <p className="product-tabs__text">Size Guide content goes here...</p>
        )}
        {activeTab === "shipping" && (
          <p className="product-tabs__text">Shipping details go here...</p>
        )}
        {activeTab === "reviews" && (
          <p className="product-tabs__text">Customer reviews go here...</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
