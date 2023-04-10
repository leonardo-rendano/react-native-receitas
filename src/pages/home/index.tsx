import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Logo } from "../../components/Logo";
import api from "../../services/api";
import { FoodList } from "../../components/FoodList";
import { useNavigation } from "@react-navigation/native";
import { Text as MotiText } from "moti";
import { PropsStack } from "../../routes/types";

export default function Home() {
  const navigation = useNavigation<PropsStack>()
  const [inputValue, setInputvalue] = useState<string>('')
  const [foods, setFoods] = useState([])

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get('/foods')
        setFoods(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchApi()
  }, [])

  function handleSearch(): void {
    if (!inputValue) return;

    let input = inputValue
    setInputvalue('')
    navigation.navigate('Search', { name: input })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <MotiText
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 15
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          delay: 100,
          type: 'timing',
          duration: 650
        }}
      >Encontre a receita</MotiText>
      <MotiText
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 15
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          delay: 100,
          type: 'timing',
          duration: 850
        }}>que combina com você</MotiText>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome do prato"
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputvalue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4CBE6C" />
        </TouchableOpacity>
      </View>

      <FlatList 
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#0e0e0e"
  },
  form: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ececec",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: "90%",
    height: 54,
    maxWidth: '90%'
  }
})