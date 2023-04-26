import {useState} from 'react';
import {fetchData, DataResponse} from "./DataManager";

function PokemonComparison() {
  const [pokemon1, setPokemon1] = useState<string>("");
  const [pokemon1Name, setPokemon1Name] = useState<string>("");
  const [pokemon1Height, setPokemon1Height] = useState<number>(0);
  const [pokemon1HP, setPokemon1HP] = useState<number>(0);
  const [pokemon1Exp, setPokemon1Exp] = useState<number>(0);

  const [pokemon2, setPokemon2] = useState<string>("");
  const [pokemon2Name, setPokemon2Name] = useState<string>("");
  const [pokemon2Height, setPokemon2Height] = useState<number>(0);
  const [pokemon2HP, setPokemon2HP] = useState<number>(0);
  const [pokemon2Exp, setPokemon2Exp] = useState<number>(0);

  const [inputDisplay1, setInputDisplay1] = useState<string>("");
  const [inputDisplay2, setInputDisplay2] = useState<string>("");
  const [errorDisplay, setErrorDisplay] = useState<string>("");

  function handleInputChange1(event: any): void {
    setInputDisplay1(event.target.value);
    setPokemon1(event.target.value.toLowerCase());
  }

  function handleInputChange2(event: any): void {
    setInputDisplay2(event.target.value);
    setPokemon2(event.target.value.toLowerCase());
  }

  async function handleButtonClick() {
    const response1: DataResponse = await fetchData("https://pokeapi.co/api/v2/pokemon/" + pokemon1);
    const response2: DataResponse = await fetchData("https://pokeapi.co/api/v2/pokemon/" + pokemon2);

    if (response1.status === "SUCCESS" && response2.status === "SUCCESS") {
      const name1 = response1.data.name;
      const name2 = response2.data.name;
      const capName1 = name1.charAt(0).toUpperCase() + name1.slice(1);
      const capName2 = name2.charAt(0).toUpperCase() + name2.slice(1);

      setPokemon1Name(capName1);
      setPokemon1Height(response1.data.height);
      setPokemon1HP(response1.data.stats[0].base_stat);
      setPokemon1Exp(response1.data.base_experience);

      setPokemon2Name(capName2);
      setPokemon2Height(response2.data.height);
      setPokemon2HP(response2.data.stats[0].base_stat);
      setPokemon2Exp(response2.data.base_experience);

      setErrorDisplay("Found Pokemon!");
    }
    else {
      setPokemon1Name("");
      setPokemon1Height(0);
      setPokemon1HP(0);
      setPokemon1Exp(0);

      setPokemon2Name("");
      setPokemon2Height(0);
      setPokemon2HP(0);
      setPokemon2Exp(0);
      
      setErrorDisplay("Error: could not find pokemon!");
    }
  }

  const heightDiff = pokemon1Height - pokemon2Height;
  const hpDiff = pokemon1HP - pokemon2HP;
  const expDiff = pokemon1Exp - pokemon2Exp;

  return (
    <div>
      <section>
        <header>First Pokemon:</header>
        <input 
          className="App-searchbar"
          placeholder="Search here"
          value={inputDisplay1}
          onChange={handleInputChange1}
        />

        <header>Second Pokemon:</header>
        <input 
          className="App-searchbar"
          placeholder="Search here"
          value={inputDisplay2}
          onChange={handleInputChange2}
        />
        
        <div className="Box">
          {errorDisplay}
        </div>
      </section>

      <button onClick={handleButtonClick} className="Button">Calculate</button>

      <section>
        <h3>First Pokemon</h3>
        <table className="App-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>HP</th>
              <th>Experience</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{pokemon1Name}</td>
              <td>{pokemon1Height}</td>
              <td>{pokemon1HP}</td>
              <td>{pokemon1Exp}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Second Pokemon</h3>
        <table className="App-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>HP</th>
              <th>Experience</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{pokemon2Name}</td>
              <td>{pokemon2Height}</td>
              <td>{pokemon2HP}</td>
              <td>{pokemon2Exp}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>First Pokemon vs. Second Pokemon</h3>
        <table className="App-table">
          <thead>
            <tr>
              <th>Height</th>
              <th>HP</th>
              <th>Experience</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{heightDiff}</td>
              <td>{hpDiff}</td>
              <td>{expDiff}</td>
            </tr>
          </tbody>
          <tr>Differences</tr>
        </table>
      </section>

    </div>
  );
}

export default PokemonComparison;
