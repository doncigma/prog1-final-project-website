import './App.css';
import SearchBar from "./PokemonExplorer";

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

        <table className='App-table'>
          <tr>
              <th>Name</th>
              <th>Two Favorite Pokemon</th>
              <th>Pokemon Caring Skills</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>P1</td>
            <td>cooking</td>
          </tr>
        </table>
      </div>
     
      <div className='App-mainsection'> 
        <h2>Item Shop</h2>
    
      </div>
      
      <div className='App-mainsection'> 
        <h2>TBD</h2>
    
      </div>
    </div>
  );
}

export default App;