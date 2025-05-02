import Colors from "@/constants/Colors";
import { globalStyles } from "@/styles/global";
import React from "react";
import { TextInput } from "react-native";

interface Props {
  setFilter: any;
  filter: string;
  placeholder: string;
}

export const Input = ({ setFilter, filter, placeholder }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.dark.color}
      style={globalStyles.inputSearch}
      onChangeText={setFilter}
      value={filter}
    />
  );
};
