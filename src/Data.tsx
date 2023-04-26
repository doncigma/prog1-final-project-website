// Caretakers sample data

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

// Item Shop sample data

export type CatalogItem = {
  name: string,
  cost: number,
  description: string,
}

export type ShoppingCartItem = {
  name: string
  quantity: number,
  cost: number
}

export const catalog: CatalogItem[] = [
  {name: "Potion", cost: 10, description: "Heals a bit of health" },
  {name: "Antidote", cost: 15, description:"Cures Pokemon of any ailments"},
  {name: "Poke Ball", cost:15, description:"Can catch lower-level Pokemon"},
  {name: "Ultra Ball",cost:20, description:"Can catch higher-level Pokemon"},
  {name: "Master Ball",cost:35, description:"Can catch nearly all wild Pokemon"}
]
