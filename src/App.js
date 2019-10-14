import React, { Component } from "react";

import "./style.css";

// default data

const products = [
  { id: 1, name: "Apple iphone 6s", color: "stonegrey", price: 769 },
  { id: 2, name: "Samsung Galaxy S8", color: "Midnight Black", price: 569 },
  { id: 3, name: "Hauwai P9", color: "Mystic Silver", price: 272 }
];

// function check color
function standartColor(color) {
  const colors = [
    "black",
    "grey",
    "red",
    "blue",
    "pink",
    "rosegold",
    "yellow",
    "green",
    "gold",
    "silver",
    "orange",
    "brown",
    "purple"
  ];

  let standardColor;
  colors.forEach(c => {
    if (color && color.toLowerCase().includes(c)) {
      standardColor = c;
    }
  });
  return standardColor;
}

class App extends Component {
  state = { prodcucts: [] };

  componentDidMount() {
    this.setState({ products: JSON.parse(localStorage.getItem("products")) });
  }
  componentWillMount() {}

  handleAddProduct(name, color, price) {
    const products = this.state.products;
    this.state.products.push({
      name,
      color,
      price
    });
    this.setState({ products });
  }
  handleDeleteProduct() {}

  render() {
    return (
      <div>
        <h2>Smartphone Stock</h2>
        <div className="container"></div>
        <div className="displayBox">
          <table>
            <thead>
              <th className="headerName">Product</th>
              <th className="headerName">Color</th>
              <th className="headerName">Price</th>
              <th className="headerName">Edit</th>
              <th className="headerName">Delete</th>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
