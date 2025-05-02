import { images } from "@/constants/Images";
import { globalStyles } from "@/styles/global";
import { Image } from "react-native";

interface Props {
  url: string;
  type: string;
}

export const ImageComponet = ({ url, type }: Props): JSX.Element => {
  return (
    <Image
      source={{ uri: images[url] }}
      style={
        type === "card" ? globalStyles.imageCard : globalStyles.imageDetail
      }
    />
  );
};
