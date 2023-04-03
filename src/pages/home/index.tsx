import React from "react";
import { View, Text, StyleSheet } from "react-native/types";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  }
})