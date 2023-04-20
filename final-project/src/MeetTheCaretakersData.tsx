// sample data for caretakers

export type Caretaker = {
  name: string
  twoFavPokemon: string[]
  caringSkills: string[]
}

export const CaretakerData: Caretaker[] = [
  {
    name: "Elijah",
    twoFavPokemon: ["Lucario", "Mewtwo"],
    caringSkills: ["Gentle", "Enthusiastic"]
  },

  {
    name: "Kevin",
    twoFavPokemon: ["Charizard", "Togepi"],
    caringSkills: ["Playful", "Caring"]
  }
];
