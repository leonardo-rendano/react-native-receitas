import React from "react";
import { View, Text, StyleSheet } from "react-native/types";

export default function Favourites() {
  return (
    <View style={styles.container}>
      <Text>Página de Favoritos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan'
  }
})