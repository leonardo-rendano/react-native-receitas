export type IngredientsProps = {
  id: string,
  name: string,
  amount: string
}

export type InstructionsProps = {
  id: string,
  text: string
}

export type DataProps = {
  id: string,
  name: string,
  total_ingredients: string,
  time: number,
  cover: string,
  video: string,
  ingredients: IngredientsProps[],
  instructions: InstructionsProps[]
}

export type FoodListProps = {
  data: DataProps
}