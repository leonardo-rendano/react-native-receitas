import React from "react";
import { View, Text, StyleSheet } from "react-native/types";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Página Detalhes da receita</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink'
  }
})