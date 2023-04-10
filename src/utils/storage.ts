import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavourites(key: string) {
  const favourites = await AsyncStorage.getItem(key)
  return JSON.parse(favourites) || []
}


export async function saveFavourites(key: string, newItem: any) {
  let myFavourites = await getFavourites(key)

  let hasItem = myFavourites.some(item => item.id === newItem.id)

  if (hasItem) {
    console.log('Esse item já existe na sua lista')
    return; 
  }

  myFavourites.push(newItem)

  await AsyncStorage.setItem(key, JSON.stringify(myFavourites))
}


export async function removeItem(id: string) {
  let receips = await getFavourites('@app-receitas')

  let myFavourites = receips.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@app-receitas', JSON.stringify(myFavourites))
  return myFavourites;
}


export async function isFavourite(receipe) {
  let myReceips = await getFavourites('@app-receitas')

  const favourite = myReceips.find(item => item.id === receipe.id)

  if (favourite) {
    return true;
  }

  return false;
}