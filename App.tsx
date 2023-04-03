import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 400
  },
  title: {
    fontSize: 24,
    marginTop: 100
  }
})