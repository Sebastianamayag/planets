import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/styles/global";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { planetApi } from "@/api/planet";
import { ImageComponet } from "@/components/ImageComponet";
import { TextComponent } from "@/components/TextComponent";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "@/constants/Colors";
import { fav, getFavorites } from "@/utils/fav";

// function to get one planet
const getPlanet = async (id: any): Promise<any> => {
  const { data } = await planetApi.get(`/${id}`);
  return data;
};

const detail = () => {
  const { id } = useLocalSearchParams();
  const queryClient: QueryClient = useQueryClient();
  const { data: favoritesPlanets } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });
  const isfavorite: boolean = favoritesPlanets?.find(
    (planet: any): any => planet.id === id
  );
  const { data, isLoading, error } = useQuery({
    queryKey: ["planet", id],
    queryFn: () => getPlanet(id),
  });

  // function to add or remove favorite
  const onPress = (): void => {
    const item: Record<string, string> = {
      id: data?.englishName,
      englishName: data?.englishName,
    };
    fav(item, queryClient);
  };

  if (isLoading) return <TextComponent text="Loading ..." />;

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <ImageComponet url={data?.englishName} type="detail" />
        <View style={globalStyles.containerSpaceEvenly}>
          <TextComponent
            text={data?.englishName}
            size={5}
            style={globalStyles.titleText}
          />
          <MaterialIcons
            name={isfavorite ? "favorite" : "favorite-border"}
            color={Colors.dark.favoriteIconColor}
            size={hp(5)}
            onPress={onPress}
          />
        </View>
        <View style={globalStyles.containerSpaceEvenly}>
          <TextComponent
            text="Density :"
            size={3}
            style={globalStyles.textBold}
          />
          <TextComponent text={data?.density} size={3} />
        </View>
        <View style={globalStyles.containerSpaceEvenly}>
          <TextComponent
            text="Gravity : "
            size={3}
            style={globalStyles.textBold}
          />
          <TextComponent text={data?.gravity} size={3} />
        </View>
        <View style={globalStyles.containerSpaceEvenly}>
          <TextComponent
            text="Discvered by :"
            size={3}
            style={globalStyles.textBold}
          />
          <TextComponent text={data?.discoveredBy} size={3} />
        </View>
        <View style={globalStyles.containerSpaceEvenly}>
          <TextComponent
            text="Electricity :"
            size={3}
            style={globalStyles.textBold}
          />
          <TextComponent text={data?.electricity} size={3} />
        </View>
        <View style={globalStyles.containerSpaceEvenly}>
          <TextComponent
            text="Main anomaly :"
            size={3}
            style={globalStyles.textBold}
          />
          <TextComponent text={data?.mainAnomaly} size={3} />
        </View>
        <View style={globalStyles.containerSpaceEvenly}>
          <TextComponent
            text="AVG Temp :"
            size={3}
            style={globalStyles.textBold}
          />
          <TextComponent text={data?.avgTemp} size={3} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default detail;
