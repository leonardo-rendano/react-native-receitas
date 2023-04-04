export type IngredientsProps = {
  id: string,
  name: string,
  amount: string
}

export type DataProps = {
  id: string,
  name: string,
  total_ingredients: string,
  time: number,
  cover: string,
  video: string,
  ingredients: IngredientsProps[]
}

export type FoodListProps = {
  data: DataProps
}