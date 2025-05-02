import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { globalStyles } from "@/styles/global";
import { Card } from "@/components/Card";
import { TextComponent } from "@/components/TextComponent";
import Colors from "@/constants/Colors";
import { fav, getFavorites } from "@/utils/fav";

export default function Fav() {
  const queryClient: QueryClient = useQueryClient();
  const { data: favoritesPlanets } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  // function to remove the favorite
  const onPress = (planet: any): void => {
    const item: Record<string, string> = {
      id: planet?.englishName,
      englishName: planet?.englishName,
    };
    fav(item, queryClient);
  };

  // to render if u don't have favorites
  if (!favoritesPlanets || favoritesPlanets.length === 0)
    return (
      <SafeAreaView style={globalStyles.container}>
        <TextComponent text="Please select at least one favorite planet." />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={favoritesPlanets}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <Card
            icon="favorite"
            iconColor={Colors.dark.favoriteIconColor}
            item={item}
            onPress={(): void => onPress(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}
