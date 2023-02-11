import './App.css';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Form from './components/Form';
import ListItems from './components/ListItems';
import LoginControl from './components/LoginControl';
import Toggle from './components/Toggle';
import FilterableProductTable from './components/Products/Products'

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
