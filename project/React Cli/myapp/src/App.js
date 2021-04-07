
import './App.css';
import Cars from './example/MyComponent'

const products = [
  {
    title: 'aa',
    name: 'ssss'
  },
  {
    title: '111',
    name: '2222'

  }]
function App() {
  return (
    <div className="App">
      <ul>
        {
          products.map((product, index) => {
              return (<Cars title ={product.title} key = {index}>{product.name}</Cars>)
          })
        }
      </ul>
  


    </div>
  );
}

export default App;
