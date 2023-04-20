import { CaretakerData } from "./MeetTheCaretakersData";
import { Caretaker } from "./MeetTheCaretakersData";

function MeetTheCaretakers() {
  const caretakerList: Caretaker[] = CaretakerData; // placeholder data
  const tableRows = caretakerList.map(
    (element) => {
      return(
        <tr>
          <td>{element.name}</td>
          <td>{element.twoFavPokemon.join(", ")}</td>
          <td>{element.caringSkills.join(", ")}</td>
        </tr>
      );
    }
  );
  
  return (
    <table className="App-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Two Favorite Pokemon</th>
          <th>Caring Skills</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default MeetTheCaretakers;
