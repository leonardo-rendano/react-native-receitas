import { DataProps } from "../../components/FoodList/types"

export type RouteDataProps = {
  data: DataProps,
  name: string
}

export type RouteParamsProps = {
  params: RouteDataProps
  Readonly: { key: string; name: string; path?: string; }
  key: any,
  name: any
}