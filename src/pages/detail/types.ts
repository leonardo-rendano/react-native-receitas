import { DataProps } from "../../components/FoodList/types"

export type RouteDataProps = {
  data: DataProps
}

export type RouteParamsProps = {
  params: RouteDataProps
  Readonly: { key: string; name: string; path?: string; }
  key: any,
  name: any
}