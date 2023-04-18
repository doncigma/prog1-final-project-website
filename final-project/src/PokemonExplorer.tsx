import {useState} from 'react';
import {fetchData, DataResponse} from "./DataManager";

function SearchBar() {
    const [searchPokemon, setSearchPokemon] = useState<string>("");
    const [pokemonName, setPokemonName] = useState<string>("");
    const [pokemonHeight, setPokemonHeight] = useState<number>(0);
    const [pokemonHP, setPokemonHP] = useState<number>(0);
    const [pokemonExp, setPokemonExp] = useState<number>(0);
    const [favList, setFavList] = useState<string[]>(["No Pokemon yet!"]);
    const [inputDisplay, setInputDisplay] = useState<string>("");
    const [errorDisplay, setErrorDisplay] = useState<string>("");

    function handleInputChange(event: any): void {
      setInputDisplay(event.target.value);
      setSearchPokemon(event.target.value.toLowerCase());
    }

    async function handleButtonClick() {
      const response: DataResponse = await fetchData("https://pokeapi.co/api/v2/pokemon/" + searchPokemon);
      
      if (response.status === "SUCCESS") {
        const name = response.data.name;
        const capName = name.charAt(0).toUpperCase() + name.slice(1);

        setPokemonName(capName);
        setPokemonHeight(response.data.height);
        setPokemonHP(response.data.stats[0].base_stat);
        setPokemonExp(response.data.base_experience);

        setErrorDisplay("Found Pokemon!");
      }
      if (response.status === "FAIL") {
        setPokemonName("");
        setPokemonHeight(0);
        setPokemonHP(0);
        setPokemonExp(0);
        
        setErrorDisplay("Error: could not find pokemon!");
      }
    } 

    function addToFavList() {
      if (pokemonName && !favList.includes(pokemonName)) {
        favList.push(pokemonName);
        setFavList([...favList]);
      }
    }

    const favListRows = favList.map((name: string ) => {
      return(<tr><td>{name}</td></tr>);
    });

    return (
      <div>
        
        <section>
          <header/>
          
          <input 
            className="App-searchbar"
            placeholder="Search here"
            value={inputDisplay}
            onChange={handleInputChange}
          />
          <button onClick={handleButtonClick} className='Button'>Search</button>
          
          <div className="Box">
            {errorDisplay}
          </div>

          <section>
            <table className="App-table">
              <tr> <th> Name </th> {pokemonName} </tr>
              <tr> <th> Height </th> {pokemonHeight} </tr>
              <tr> <th> HP </th> {pokemonHP} </tr>
              <tr> <th> Experience </th> {pokemonExp} </tr>
            </table>
          </section>
        </section>

        <section>
          <button onClick={addToFavList} className='Button'>Add To Favorites List</button> 
          
          <table>
            <thead>
              <th>Favorite List</th>
            </thead>
            <tbody>
              {favListRows}
            </tbody>
          </table>
        </section>
          
      </div>

    );
}

export default SearchBar;
