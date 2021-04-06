import { Card } from "./examples/component";
import "./App.css";

const products = [
  {
    title: "苹果",
    description: "一种很甜的水果",
  },
  {
    title: "菠萝",
    description: "表面多刺的一种水果",
  },
];

function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <Card title={product.title}>{product.description}</Card>
      ))}
    </div>
  );
}

export default App;
