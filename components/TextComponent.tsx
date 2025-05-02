import { globalStyles } from "@/styles/global";
import { StyleProp, Text, TextStyle } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Props {
  size?: number;
  text: string;
  style?: any;
}

export const TextComponent = ({
  size = 2,
  text,
  style,
}: Props): JSX.Element => {
  return (
    <Text style={{ fontSize: hp(size), ...globalStyles.textColor, ...style }}>
      {text}
    </Text>
  );
};
