import './App.css';
import Clock from './components/Clock';
import Counter from './components/Counter';
import ListItems from './components/ListItems';
import LoginControl from './components/LoginControl';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <LoginControl />
      <ListItems />
    </div>
  );
}

export default App;
