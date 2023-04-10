import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteParamsProps } from "./types";
import { FoodList } from "../../components/FoodList";
import api from "../../services/api";


export default function Search() {
  const route = useRoute<RouteParamsProps>()
  const [receips, setReceips] = useState([])

  useEffect(() => {
    async function fetchReceips() {
      const response = await api.get(`/foods/?name_like=${route.params?.name}`)
      setReceips(response.data)
    }

    fetchReceips()
  }, [route.params?.name])

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={receips}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => <Text style={styles.text}>Não encontramos o que está buscando.</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  },
  text: {
    fontSize: 16
  }
})