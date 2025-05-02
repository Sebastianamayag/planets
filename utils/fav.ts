import { QueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to check if the favorite is there and update the state
export const fav = async (
  fav: Record<string, string>,
  queryClient: QueryClient
): Promise<void> => {
  const favoritesPlanets = queryClient.getQueryData<any[]>(["favorites"]) ?? [];
  const isFavorite: any = favoritesPlanets?.some(
    (planet: any): any => planet.id === fav.id
  );
  let updatedFavorites: any[];
  if (isFavorite) {
    updatedFavorites =
      favoritesPlanets?.filter((planet) => planet.id !== fav.id) ?? [];
  } else {
    updatedFavorites = [...favoritesPlanets, fav];
  }
  queryClient.setQueryData(["favorites"], updatedFavorites);
  try {
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error(error);
  }
};

// Function to get favorites from the storage
export const getFavorites = async (): Promise<any[]> => {
  try {
    const data = await AsyncStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
