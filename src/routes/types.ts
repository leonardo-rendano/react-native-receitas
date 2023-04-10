import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DataProps, FoodListProps } from "../components/FoodList/types"

export type PropsNavigationStack = {
  Home: undefined,
  Detail: { data: DataProps },
  Search: { name: string }
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>