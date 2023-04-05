import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DataProps, FoodListProps } from "../components/FoodList/types"

export type PropsNavigationStack = {
  Home: undefined,
  Detail: { data: DataProps },
  Search: undefined
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>