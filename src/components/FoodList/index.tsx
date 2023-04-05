import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/types";
import { FoodListProps } from "./types";

export function FoodList({ data }: FoodListProps) {
  const navigation = useNavigation<PropsStack>()

  function handleNavigate() {
    navigation.navigate("Detail", { data: data })
  }

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={handleNavigate}>
      <Image
        source={{ uri: data.cover }}
        style={styles.cover}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.total_ingredients} ingredients | {data.time} min</Text>
      </View>
      <LinearGradient  
        style={styles.gradient}
        colors={[ 'transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)' ]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  cover: {
    width: '100%',
    height: 200,
    borderRadius: 14
  },
  info: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    zIndex: 99
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  description: {
    color:'#fff'
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height:'55%',
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: 'transparent'
  }
})