import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Home from "../pages/Home";
import Favourites from "../pages/favourites";

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
    </Tab.Navigator>
  )
}