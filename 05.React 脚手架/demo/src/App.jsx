import { Component } from "react";
import Card from "./examples/component";

import "./App.css";

const products = [
  {
    title: "苹果",
    content: "甜甜的水果",
  },
  {
    title: "菠萝",
    content: "带刺的水果",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {products.map((product, index) => (
          <Card key={index} title={product.title}>
            {product.content}
          </Card>
        ))}
      </div>
    );
  }
}

export default App;
