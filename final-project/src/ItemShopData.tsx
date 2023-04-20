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