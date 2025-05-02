import { TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ImageComponet } from "./ImageComponet";
import { TextComponent } from "./TextComponent";
import { globalStyles } from "@/styles/global";

interface Props {
  item: any;
  icon: any;
  onPress: () => void;
  iconColor: string;
}

export const Card = ({
  item,
  iconColor,
  icon,
  onPress,
}: Props): JSX.Element => {
  return (
    <View style={globalStyles.card}>
      <View style={globalStyles.cardbody}>
        <ImageComponet url={item.englishName} type="card" />
        <TextComponent
          text={item.englishName}
          style={globalStyles.textBold}
          size={2.5}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons name={icon} color={iconColor} size={hp(3)} />
      </TouchableOpacity>
    </View>
  );
};
