import './App.css';
import SearchBar from "./PokemonExplorer";
import MeetTheCaretakers from './MeetTheCaretakers';
import ItemShop from './ItemShop';
import Comparison from './PokemonComparison';

function App() {
  return (
    <div className="App">
      <h1> Welcome to the Pokemon Adoption Center </h1>
     
      <div className='App-mainsection'> 
        <h2>Pokemon Explorer</h2>
        <SearchBar/>
      </div>
      
      <div className='App-mainsection'> 
        <h2>Meet the Caretakers</h2>
        <MeetTheCaretakers/>
      </div>
     
      <div className='App-mainsection'> 
        <h2>Item Shop</h2>
        <ItemShop/>
      </div>
      
      <div className='App-mainsection'> 
        <h2>Pokemon Comparison</h2>
        <Comparison/>
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default App;
