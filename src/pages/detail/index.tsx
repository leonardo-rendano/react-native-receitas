import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'
import { DataProps } from "../../components/FoodList/types";

type RouteDataProps = {
  data: DataProps
}

type RouteParamsProps = {
  params: RouteDataProps
  Readonly: { key: string; name: string; path?: string; }
  key: any,
  name: any
}

export default function Detail() {
  const route = useRoute<RouteParamsProps>()
  const navigation = useNavigation()

  console.log(route)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => alert('Pressionou')}>
          <Entypo
            name="heart"
            size={28}
            color="#ff4141"
          />
        </Pressable>
      )
    })
  }, [navigation, route.params?.data])

  return (
    <View style={styles.container}>
      <Text>{route.params?.data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink'
  }
})