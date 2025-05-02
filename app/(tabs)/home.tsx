import { FlatList, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Router, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { planetApi } from "@/api/planet";
import { globalStyles } from "@/styles/global";
import { TextComponent } from "@/components/TextComponent";
import { Card } from "@/components/Card";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { Input } from "@/components/Input";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { heightPercentageToDP } from "react-native-responsive-screen";

// function to get all planets
const getPlanets = async (): Promise<any> => {
  try {
    const { data } = await planetApi.get("?filter[]=isPlanet,eq,true");
    return data.bodies;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default function Home() {
  const router: Router = useRouter();
  // state
  const { data, isLoading, error } = useQuery({
    queryKey: ["planets"],
    queryFn: getPlanets,
  });
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");

  // function to filter data when search something or press in one arrow
  const filteredData = (): any[] => {
    const newData: any = data?.filter((planet: any) =>
      planet.englishName.toLowerCase().includes(filter.toLowerCase())
    );
    if (order && order !== "") {
      return newData.sort((a: any, b: any) => {
        if (order === "asc") return b.englishName.localeCompare(a.englishName);
        return a.englishName.localeCompare(b.englishName);
      });
    }
    return newData;
  };

  // function to go to planet detail
  const onPress = (item: any): void => {
    router.push({
      pathname: "/detail",
      params: { id: item.englishName },
    });
  };

  // function to change the order
  const onOrder = (value: string): void => {
    if (order !== value) {
      setOrder(value);
    } else {
      setOrder("");
    }
  };

  if (isLoading) return <TextComponent text="Loading ..." />;

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.containerFilters}>
        <Input
          placeholder="Search planet"
          setFilter={setFilter}
          filter={filter}
        />
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            onPress={(): void => onOrder("desc")}
            name="arrow-upward"
            color={Colors.dark.color}
            size={heightPercentageToDP(5)}
          />
          <MaterialIcons
            onPress={(): void => onOrder("asc")}
            name="arrow-downward"
            color={Colors.dark.color}
            size={heightPercentageToDP(5)}
          />
        </View>
      </View>
      <FlatList
        data={filteredData()}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <Card
            icon="keyboard-arrow-right"
            iconColor={Colors.dark.arrowIconColor}
            item={item}
            onPress={(): void => onPress(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}
