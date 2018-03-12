import { View, Text } from "react-native";
import * as React from "react";

const about = ({aboutText} : IProps) => {
  return (
    <View>
      <Text>About us</Text>
      <Text>{aboutText}</Text>
    </View>
  );
};

interface IProps {
  aboutText : string;
}

export default about;
